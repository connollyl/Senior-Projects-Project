// @flow
import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import SelectBox from '../../../components/SelectBox';
import SectionWrapper from '../../../components/SectionWrapper';
import Button from '../../../components/Button';
import Treeview from '../../../components/TreeView';
import { testframeworkbranchesdata } from '../mock/mockContent';
/**
 * This page contains extra parameters to use for code testing
 * Gives the user more customization for builds.
 * @param classes: css classes for the html components
 * @param loadTestData: method to get data for the test branches
 * @param saveButtonOnClick: method to save test configuration
 * @param loadButtonOnClick: method to load data of a test configuration
 * @param loadBranchData: method to get the file tree structure from backend
 * @param branches: stored test branch data
 * @param treeData: stored file tree data
 * @param testBranchSelected: value to hold currectly selected branch
 * @param testBranchOnChange: method to change selected test branch
 */
type Props = {
  classes: any,
  loadTestData: any,
  saveButtonOnClick: any,
  loadButtonOnClick: any,
  loadBranchData: any,
  branches: any,
  treeData: any,
  testBranchSelected: any,
  testBranchOnChange: any,
};

const TestConfigurationPage = (props: Props) => {
  const {
    classes,
    branches,
    saveButtonOnClick,
    loadButtonOnClick,
    loadBranchData,
    loadTestData,
    treeData,
    testBranchSelected,
    testBranchOnChange,
  } = props;

  /*
  Effects to use on page to load data
  */
  useEffect(() => {
    loadTestData();
    loadBranchData();
  }, []);

  /*
  Get tree view multiselect to work correct and figure out a way to select whole folders
  */
  return (
    <div className={classes.root}>
      <SectionWrapper border title="Tester Controls" icon="check" sectionTitleVariant="primary">
        <Grid item sm={6} xs={12}>
          <SelectBox
            name="Test Branch"
            things={branches}
            value={testBranchSelected}
            onChange={testBranchOnChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <SelectBox
            name="Test Framework Branch"
            things={testframeworkbranchesdata} // still using mock data, needs action to get data
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <SelectBox
            name="Framework Configuration File"
            things={testframeworkbranchesdata} // still using mock data, needs action to get data
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <SelectBox
            name="Robot Framework Resource File"
            things={testframeworkbranchesdata} // still using mock data, needs action to get data
          />
        </Grid>
        <Grid item sm={5} xs={12}>
          <Button
            label="Save"
            size="large"
            variant="outline"
            onClick={saveButtonOnClick} // program event to be implmented in tester page wrapper
          />
        </Grid>
        <Grid item sm={2} xs={false} />
        <Grid item sm={5} xs={12}>
          <Button
            label="Load"
            size="large"
            variant="outline"
            onClick={loadButtonOnClick} // program event to be implmented in tester page wrapper
          />
        </Grid>
        <div className={classes.root} />
        <Grid container item xs={12}>
          <Treeview>
            {treeData}
          </Treeview>
        </Grid>
      </SectionWrapper>
    </div>
  );
};
export { TestConfigurationPage };
