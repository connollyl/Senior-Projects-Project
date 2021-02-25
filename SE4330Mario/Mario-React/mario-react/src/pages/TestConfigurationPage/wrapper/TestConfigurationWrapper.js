import React, { useState } from 'react';
import { getQueryString } from '../../../util/queryStringUtil';
/**
 * This is the wrapper for the test configuration page.
 * Redux Actions:
 *   - getBranchDataAction
 *   - getTreeViewDataAction
 * @param classes: css classes passed to the html component
 * @param token: OAuth token unique to each user
 */
type Props = {
  classes: any;
  getBranchDataAction: any;
  getTreeViewDataAction: any;
  token: any;
  selectedProject: String;
  selectedRepo: String;
  Projects: any;
};

const TestConfigurationWrapper = (WrappedComponent: any) => {
  const TestConfigurationPageWrapper = (props: Props) => {
    const {
      getBranchDataAction,
      getTreeViewDataAction,
      token,
      selectedProject,
      selectedRepo,
      Projects,
    } = props;

    const [testBranchSelected, setTestBranchSelected] = useState();

    /*
    Calls the method to get the branch data from the back end
    */
    const loadBranchData = async () => {
      await getBranchDataAction(token.access_token, selectedProject || Projects[0], selectedRepo);
    };

    /*
    Calls the method to get the file tree from the back end
    */
    const loadTestData = async () => {
      await getTreeViewDataAction(token.access_token, selectedProject || Projects[0], selectedRepo);
    };

    /*
    Event for load button to get testing config
    */
    const loadButtonOnClick = () => {

    };

    /*
    Event for save button to save selected params as config
    */
    const saveButtonOnClick = () => {

    };

    /*
    Changes what the currently displayed branch in the component is to
    reflect what the user selects.
    */
    const testBranchOnChange = (event) => {
      const { target: { value } } = event;
      setTestBranchSelected(value);
    };

    const pageProps = {
      testBranchSelected,
      testBranchOnChange,
      getQueryString,
      loadTestData,
      loadButtonOnClick,
      saveButtonOnClick,
      loadBranchData,
      ...props,
    };
    return <WrappedComponent {...pageProps} />;
  };
  return TestConfigurationPageWrapper;
};

export { TestConfigurationWrapper };

