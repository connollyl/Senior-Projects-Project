/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// Todo remove this header ^
import React, { useState, useEffect } from 'react';
import { getConfig } from '../../../util/configUtil';

/**
 * This is the wrapper for the admin page.
 * Redux actions:
 *   - getAdminAction
 *   - postAdminViewMapAction
 *   - postAdminViewAction
 * @param classes: css classes passed to the html component
 * @param token: OAuth token unique to each user
 * @param selectedProject: project chosen for Azure
 */
type Props = {
  classes: any;
  getAdminAction: any;
  postAdminViewAction: any;
  postAdminViewMapAction: any;
  selectedProject: any,
  token: any;
};

const AdminWrapper = (WrappedComponent: any) => {
  const AdminPageWrapper = (props: Props) => {
    const {
      getAdminAction,
      postAdminViewAction,
      postAdminViewMapAction,
      selectedProject,
      token,
    } = props;

    /**
     * Values used throughout page logic. All use state variables
     * are hooked to redux and can be changed by performing actions
     * on the page.
     */
    const [buildIDEntered, setBuildIDEntered] = useState();
    const [buildMap, setBuildMap] = useState();
    const [driveType, setDriveType] = useState();
    const [driveTypeSelected, setDriveTypeSelected] = useState();
    const [envType, setEnv] = useState();
    const [mapDriveTypeSelected, setMapDriveTypeSelected] = useState();
    const [mapTestEnvSelected, setMapTestEnvSelected] = useState();
    const [newEnv, setNewEnv] = useState();
    const [newDriveType, setNewDriveType] = useState();
    const [nickNameEntered, setNickNameEntered] = useState();
    const [testEnvSelected, setTestEnvSelected] = useState();
    const [selectedBuildIDIndex, setSelectedBuildIDIndex] = useState();

    const config = getConfig();

    /**
     * These variables are for storing the data we get back from our
     * Axios calls. They are each arrays of strings that we use to
     * populate our components on the page.
     */
    let buildMapDrive = [];
    let buildMapID = [];
    let driveString = [];
    let envString = [];
    let nickNameString = [];

    /**
     * This segment takes what we get back from the Axios calls
     * and flattens the objects into string arrays to be displayed
     * on the page.
     */
    if (buildMap) {
      buildMapDrive = buildMap.map((mapTemp) => {
        return mapTemp.drivetype;
      });

      buildMapID = buildMap.map((mapTemp) => {
        return mapTemp.buildid;
      });

      nickNameString = buildMap.map((mapTemp) => {
        return mapTemp.nickname;
      });

      driveString = driveType.map((driveTemp) => {
        return driveTemp.name;
      });

      envString = envType.map((envTemp) => {
        return envTemp.name;
      });
    }

    /**
     * Handles the onChange event for selecting a drive type for a mapping
     * @param {SyntheticEvent} event event fired from DOM
     */
    const handleMapDriveTypeSelected = (event) => {
      const { target: { value } } = event;
      setMapDriveTypeSelected(value);
    };

    /**
     * Handles the onChange event for selecting an environment for a mapping
     * @param {SyntheticEvent} event event fired from DOM
     */
    const handleMapTestEnvSelected = (event) => {
      const { target: { value } } = event;
      setMapTestEnvSelected(value);
    };

    /**
     * Handles the onChange event for the SelectableList, allows selection
     * @param {SyntheticEvent} index event from dom containing the value of the new build ID mapping selected
     */
    const handleSetSelectedBuildIDIndex = (index) => {
      setSelectedBuildIDIndex(index);
    };

    /**
     * Handles the onChange event for the new drive type addition
     * @param {SythenticEvent} event event fired from DOM
     */
    const handleNewDriveTypeOnChange = (event) => {
      setNewDriveType(event.target.value);
    };

    /**
     * Handle the onChange event for the new environment text box
     * @param {SythenticEvent} event event fired from DOM
     */
    const handleNewEnvOnChange = (event) => {
      setNewEnv(event.target.value);
    };

    /**
     * Handles the event for whenever a drive type is selected from the selectable list
     * @param {SyntheticEvent} index event from dom containing the value of the new drive type selected
     */
    const driveTypeOnChange = (index) => {
      setDriveTypeSelected(index);
    };

    /**
     * Handles onChange for environment selectable list,
     * @param {SyntheticEvent} index event from dom containing the value of the new environment selected
     */
    const testEnvOnChange = (index) => {
      setTestEnvSelected(index);
    };

    /**
     * Handles the onChange method for entering a build ID to be included in a mapping
     * @param {SyntheticEvent} event event fired from DOM
     */
    const buildIDOnChange = (event) => {
      const { target: { value } } = event;
      setBuildIDEntered(value);
    };

    /**
     * Handles the onChange method for entering a nickname to be included in a mapping
     * @param {SyntheticEvent} event event fired from DOM
     */
    const nickNameOnChange = (event) => {
      const { target: { value } } = event;
      setNickNameEntered(value);
    };

    /**
     * Handles the Axios calls made to get data needed for this view and makes calls to methods to populate
     * the corresponding components.
     */
    const getAdminView = async () => {
      const accessToken = token.access_token;
      const getDriveType = await getAdminAction(config.adminDriveType.host, accessToken, selectedProject);
      const getEnv = await getAdminAction(config.adminEnv.host, accessToken, selectedProject);
      const getBuildMap = await getAdminAction(config.adminBuildMap.host, accessToken, selectedProject);
      setDriveType(getDriveType.drivetypes);
      setEnv(getEnv.environments);
      setBuildMap(getBuildMap.buildmaps);
    };

    /**
     * Acts as the constructor of this wrapper. Sets up the admin view
     */
    useEffect(() => {
      getAdminView();
    }, []);

    /**
     * Handles the add button method for adding a new evironment to the list of environments. Makes an Axios call to
     * send that entered data to the database
     */
    const addDriEnv = async () => {
      const accessToken = token.access_token;
      await postAdminViewAction('post', config.adminEnv.host, newEnv, accessToken);
    };

    /**
     * Handles the add button method for adding a new drive type to the list of drive types. Makes an Axios call to
     * send that entered data to the database
     */
    const addDriType = async () => {
      const accessToken = token.access_token;
      await postAdminViewAction('post', config.adminDriveType.host, newDriveType, accessToken);
    };

    /**
     * Handles the add button method for entering a build ID mapping. This method bundles the user entered info
     * and calls to Axios to send that data to the database.
     */
    const addOnClick = async () => {
      const accessToken = token.access_token;
      await postAdminViewMapAction('post', config.adminBuildMap.host, mapTestEnvSelected, mapDriveTypeSelected, buildIDEntered, nickNameEntered, accessToken);
    };

    /**
     * Handles the remove button method for removing an environment from the list of environments. Makes an Axios
     * call to remove that selected data from the database
     */
    const removeDriEnv = async () => {
      const accessToken = token.access_token;
      await postAdminViewAction('delete', config.adminEnv.host, envString[testEnvSelected], accessToken);
    };

    /**
     * Handles the remove button method for removing a drive type from the list of drive types. Makes an Axios
     * call to remove that selected data from the database
     */
    const removeDriType = async () => {
      const accessToken = token.access_token;
      await postAdminViewAction('delete', config.adminDriveType.host, driveString[driveTypeSelected], accessToken);
    };

    /**
     * This method is partially implemented. Its purpose is to handle the remove button method for build ID mappings.
     * The unimplemented aspect is the axios call.  The way it's set up right now is far too complicated.  To simplify
     * set up the backend to handle receiving an ID or nickname to remove from the database, and then make this call with
     * only that paramater.
     */
    const removeMap = async () => {
      const accessToken = token.access_token;
      // buildMapID[index] <- That is the selected id
      await postAdminViewMapAction('delete', config.adminBuildMap.host, 'buildMapTest1', 'buildMapTest1', 'buildIDTest', 'buildNickName', accessToken);
    };

    /**
     * These are the properties that belong to the Admin page. These are passed from the wrapper
     * to AdminPage.js where these values are used to populate the components on the page
     */
    const pageProps = {
      addDriEnv,
      addDriType,
      addOnClick,
      buildIDEntered,
      buildIDOnChange,
      buildMapID,
      driveString,
      driveTypeOnChange,
      driveTypeSelected,
      envString,
      handleMapDriveTypeSelected,
      handleMapTestEnvSelected,
      handleNewDriveTypeOnChange,
      handleNewEnvOnChange,
      handleSetSelectedBuildIDIndex,
      mapDriveTypeSelected,
      mapTestEnvSelected,
      newDriveType,
      newEnv,
      nickNameEntered,
      nickNameOnChange,
      nickNameString,
      removeDriEnv,
      removeDriType,
      removeMap,
      selectedBuildIDIndex,
      testEnvOnChange,
      testEnvSelected,
      ...props,
    };
    return <WrappedComponent {...pageProps} />;
  };
  return AdminPageWrapper;
};

export { AdminWrapper };

