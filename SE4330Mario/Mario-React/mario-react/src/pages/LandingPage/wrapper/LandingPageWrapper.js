/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { handleOauth } from '../../../util/configUtil';
import { calculatePercent } from '../../../util/mathUtil';
import { parseJwt } from '../../../util/queryStringUtil';
/**
 * This is the wrapper for the landing page.
 * Redux actions:
 *   - queueBuildAction
 *   - setLoadingAction
 *   - getOAuthDataWithToken
 *   - getArtifactsAction
 *   - initalizeApp
 *   - getLastRunDataAction
 *   - getDevVeiwDataAction
 * @param classes: css classes passed to the html component
 * @param naviagte: enables page to navigate between other routes
 * @param token: OAuth token unique to each user
 * @param Branches: git branches
 * @param artifacts: artifacts
 * @param nameId: unique Id to identify each user
 * @param selectedProject: project chosen for Azure
*/
type Props = {
  classes: any;
  navigate: any;
  token: any;
  queueBuildAction: any;
  setLoadingAction: any;
  getOAuthDataWithToken: any;
  getNameAction: any;
  getArtifactsAction: any;
  intializeApp: any;
  Branches: any;
  artifacts: any;
  getLastRunDataAction: any;
  getDevViewDataAction: any;
  nameId: any;
  selectedProject: any;
  selectedRepo: String;
  getReposAction: any;
  getProjectsAction: any;
  Projects: any;
};

const LandingWrapper = (WrappedComponent: any) => {
  const LandingPageWrapper = (props: Props) => {
    const {
      queueBuildAction,
      setLoadingAction,
      token,
      getOAuthDataWithToken,
      getDevViewDataAction,
      getNameAction,
      getArtifactsAction,
      intializeApp,
      Branches,
      artifacts,
      getLastRunDataAction,
      nameId,
      getReposAction,
      selectedProject,
      selectedRepo,
      getProjectsAction,
      Projects,
    } = props;
    const [modalOpen, setModalOpen] = useState(false);
    const [driveTypeSelected, setDriveTypeSelected] = useState();
    const [applicationArtifactsSelected, setApplicationArtifactsSelected] = useState();
    const [cCArtifactArtifcatSelected, setCCArtifactArtifcatSelected] = useState();
    const [pCArtifactArtifcatSelected, setPCArtifactArtifcatSelected] = useState();
    const [percentRunsSuccessful, setPercentRunsSuccessful] = useState(0);
    const [modalHeader, setModalHeader] = useState('');
    const [modalSubText, setModalSubText] = useState('');
    const [testEnvSelected, setTestEnvSelected] = useState();
    const projectedSelected = selectedProject || Projects[0];

    const applicationOnChange = (event) => {
      setApplicationArtifactsSelected(event.target.value);
    };
    const firmWareOnChange = (event) => {
      setCCArtifactArtifcatSelected(event.target.value);
    };
    const powerCardOnChange = (event) => {
      setPCArtifactArtifcatSelected(event.target.value);
    };

    const driveTypeOnChange = (event) => {
      const { target: { value } } = event;
      setDriveTypeSelected(value);
    };

    const testEnvOnChange = (event) => {
      const { target: { value } } = event;
      setTestEnvSelected(value);
    };
    const [firmWareSelectedIndex, setFirmWareSelectedIndex] = useState(0);
    const firmWareOnClick = (index) => {
      setFirmWareSelectedIndex(index);
    };
    const firmWareProps = () => ({
      selectBoxItems: [
        'Branch',
        'Id',
      ],
      branchListOnClick: firmWareOnClick,
      branchListSelected: firmWareSelectedIndex,
      title: 'Firmware',
    });

    const [powerCardSelectedIndex, setPowerCardSelectedIndex] = useState(0);
    const powerCardOnClick = (index) => {
      setPowerCardSelectedIndex(index);
    };
    const powerCardProps = () => ({
      selectBoxItems: [
        { title: 'Branch' },
        { title: 'Id' },
      ],
      branchListOnClick: powerCardOnClick,
      branchListSelected: powerCardSelectedIndex,
      title: 'Power Card',
    });

    const [numberOfRuns, setNumberOfRuns] = useState(1);
    const numberOfRunsOnChange = (event) => {
      setNumberOfRuns(event.target.value);
    };
    const handleModalClose = () => {
      setModalOpen(false);
    };
    const modalsOpen = () => {
      setModalOpen(true);
    };
    const testRunOnClick = async (index) => {
      if (index === 0) {
        setDriveTypeSelected('');
        setTestEnvSelected('');
        setPCArtifactArtifcatSelected('');
        setCCArtifactArtifcatSelected('');
        setApplicationArtifactsSelected('');
        setNumberOfRuns(1);
      } else if (index === 1) {
        const accessToken = token.access_token;
        const response = await getLastRunDataAction(accessToken, nameId.nameid, selectedRepo);
        setDriveTypeSelected(response.driveType);
        setTestEnvSelected(response.testEnv);
        setPCArtifactArtifcatSelected('');
        setCCArtifactArtifcatSelected('');
        setApplicationArtifactsSelected('');
        setNumberOfRuns(1);
      }
    };

    const [emailOpen, setEmailOpen] = useState(false);
    const [currentEmail, setCurrentEmail] = useState('');
    const openEmail = () => {
      setEmailOpen(true);
    };
    const [emails, setEmails] = useState([]);
    const emailHandleClose = () => {
      setEmailOpen(false);
    };
    const handleAddItemClick = () => {
      const emailList = emails;
      emailList.push(currentEmail);
      setEmails(emailList);
      setCurrentEmail('');
    };
    const emailHandleChange = (event) => {
      setCurrentEmail(event.target.value);
    };

    const handleModalOpen = (response) => {
      const { failedResponses } = response;
      const runs = response.numberOfRuns;
      const percentageSucceeded = calculatePercent(runs, runs - failedResponses);
      setPercentRunsSuccessful(percentageSucceeded);
      const msg = (percentageSucceeded === 100) ? 'All builds queued successfully' : 'Some builds did not queue successfully';
      setModalSubText(`${percentageSucceeded}% of the ${runs} queued runs successfully queued`);
      setModalHeader(msg);
      modalsOpen(true);
    };

    const setUpQueueBuild = async () => {
      if (testEnvSelected && driveTypeSelected) {
        const accessToken = token.access_token;
        const response = await queueBuildAction({
          project: projectedSelected,
          testEnv: testEnvSelected,
          driveType: driveTypeSelected,
          // eslint-disable-next-line radix
          numberOfRuns: parseInt(numberOfRuns),
          emails,
          APPArtifacts: applicationArtifactsSelected,
          CCArtifacts: cCArtifactArtifcatSelected,
          PCArtifacts: pCArtifactArtifcatSelected,
        }, accessToken);
        handleModalOpen(response);
      }
    };

    const getArtifacts = async () => {
      if (driveTypeSelected && testEnvSelected) {
        await getArtifactsAction(token.access_token, driveTypeSelected, testEnvSelected, selectedProject, selectedRepo);
      }
    };

    const [applicationSelectedIndex, setApplicationSelectedIndex] = useState(0);
    const applicationOnClick = (index) => {
      setApplicationSelectedIndex(index);
    };

    const applicationProps = () => ({
      selectBoxItems: [
        { title: 'Branch' },
        { title: 'Id' },
      ],
      branchListOnClick: applicationOnClick,
      branchListSelected: applicationSelectedIndex,
      branchListItems: Branches,
      title: 'Application',
    });
    let parsedArtifacts = [];
    const parseArtifacts = () => {
      parsedArtifacts = [];
      if (artifacts && artifacts.value) {
        artifacts.value.forEach((value) => {
          parsedArtifacts.push(value.name);
        });
      }
    };
    parseArtifacts();
    useEffect(() => {
      getArtifacts();
    }, [driveTypeSelected, testEnvSelected]);

    // const [hasSentOAuth, setHasSentOAuth] = useState(false);
    const gatherOauth = async () => {
      await handleOauth(token, getOAuthDataWithToken, setLoadingAction, intializeApp);
      const accessToken = token.access_token;
      const projectResponse = await getProjectsAction(accessToken);
      const { data } = projectResponse;
      const projects = data.Projects;
      const reposResponse = await getReposAction(accessToken, selectedProject || projects[0]);
      const { data: { repos } } = reposResponse;
      await getDevViewDataAction(accessToken, projects[0], selectedRepo.selectedRepo || repos[0]);
      if (token && token.access_token) {
        setLoadingAction(true);
        await getNameAction(parseJwt(token.access_token));
        setLoadingAction(false);
      }
    };
    // if (!hasSentOAuth) {
    //   setHasSentOAuth(true);
    //   gatherOauth();
    // }
    useEffect(() => {
      gatherOauth();
    }, []);
    const pageProps = {
      percentRunsSuccessful,
      testRunOnClick,
      driveTypeSelected,
      driveTypeOnChange,
      testEnvSelected,
      testEnvOnChange,
      numberOfRunsOnChange,
      setUpQueueBuild,
      handleModalClose,
      numberOfRuns,
      openEmail,
      modalOpen,
      modalHeader,
      modalSubText,
      emails,
      emailOpen,
      emailHandleClose,
      handleAddItemClick,
      emailHandleChange,
      firmWareProps,
      powerCardProps,
      parsedArtifacts,
      applicationProps,
      firmWareOnChange,
      powerCardOnChange,
      applicationOnChange,
      cCArtifactArtifcatSelected,
      pCArtifactArtifcatSelected,
      applicationArtifactsSelected,
      ...props,
    };
    return <WrappedComponent {...pageProps} />;
  };
  return LandingPageWrapper;
};

export { LandingWrapper };

