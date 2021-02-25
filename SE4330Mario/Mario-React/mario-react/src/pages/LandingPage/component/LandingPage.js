/* eslint-disable no-unused-vars */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import cloneDeep from 'lodash/cloneDeep';
import SectionWrapper from '@components/SectionWrapper';
import LoadingSpinner from '@components/LoadingSpinner';
import SelectableList from '@components/SelectableList';
import Button from '@components/Button';
import IconButton from '@components/IconButton';
import NumberPicker from '@components/NumberPicker';
import SelectBox from '@components/SelectBox';
import Modal from '@components/Modal';
import EmailDialog from '@components/EmailDialog';
import Tooltip from '@components/Tooltip';
import * as tooltips from '@constants/tooltip-constants';
import Generator from '@components/Generator';
import LandingPageSub from '../subcomponent';
import { LOADING_SPINNER_TEXT } from '../../../constants/content';
import TestConfigurationPage from '../../TestConfigurationPage/component';
import { TEST_CONFIGURATION_PATH } from '../../../constants/route-paths';
import content from '../mocks/content.json';
import * as mockObject from '../mocks/mock-object';
import { mockJson as generatorMock } from '../mocks/generator-mock';
/**
 * This page is the first page the user sees when starting the application.
 * It allows the user to customize and queue a build.
 * @param classes: css classes passed to the html component
 * @param testRunOnClick: determines if page needs to clear everything or populate with previous data
 * @param DriveType: array of drive types
 * @param TestEnv: array of test enviornments
 * @param driveTypeSelected: drive type that user has selected
 * @param driveTypeOnChange: updates page when a new drive type is selected
 * @param testEnvSelected: test enviornment that user has selected
 * @param testEnvOnChange: updates page when a new test enviornment is selected
 * @param numberOfRunsOnChange: updates page when number of runs changes
 * @param numberOfRuns: number of runs the user has selected
 * @param openEmail: opens text field to enter emails to send results to
 * @param location: current path route
 * @param setUpQueueBuild: queues the build in Azure
 * @param handleModalClose: event fired whenever the modal closes
 * @param modalOpen: boolean variable tracking if the modal is open or closed
 * @param modalHeader: title for the modal
 * @param modalSubText: subtext for the modal
 * @param percentRunsSuccessful: success rate of the runs
 * @param isLoading: boolean variable tracking if page is loading
 * @param emails: array of cc'd emails inputed by the user
 * @param emailOpen: boolean variable tracking if email box is open or close
 * @param emailHandleClose: event fired whenever email box closes
 * @param handleAddItemClick: event fired whenever the add button is clicked on the email modal
 * @param emailHandleChange: upates modal when entered email changes
 * @param testRunSelectedIndex: index of number of runs selected
 */
type Props = {
  classes: any,
  testRunOnClick: () => {},
  DriveType: any;
  TestEnv: any;
  driveTypeSelected: any;
  driveTypeOnChange: any;
  testEnvSelected: any;
  testEnvOnChange: any;
  numberOfRunsOnChange: any;
  numberOfRuns: any;
  openEmail: any;
  location: any;
  setUpQueueBuild: any;
  handleModalClose: any;
  modalOpen: any;
  modalHeader: any;
  modalSubText: any;
  percentRunsSuccessful: any;
  isLoading: any;
  emails: any;
  emailOpen: any;
  emailHandleClose: any;
  handleAddItemClick: any;
  emailHandleChange: any;
  testRunSelectedIndex: any;
};

const LandingPage = (props: Props) => {
  const {
    classes,
    testRunOnClick,
    DriveType,
    TestEnv,
    driveTypeSelected,
    driveTypeOnChange,
    testEnvSelected,
    testEnvOnChange,
    numberOfRunsOnChange,
    numberOfRuns,
    openEmail,
    location,
    setUpQueueBuild,
    handleModalClose,
    modalOpen,
    modalHeader,
    modalSubText,
    percentRunsSuccessful,
    isLoading,
    emails,
    emailOpen,
    emailHandleClose,
    handleAddItemClick,
    emailHandleChange,
    testRunSelectedIndex,
  } = props;
  const {
    driveTypeTitle,
    testEnvTitle,
    testRunSelectedTitle,
    icons,
    firmWareTitle,
    numberOfRunsLabel,
    developerLabel,
  } = content;
  const { developerIcon, firmwareIcon, emailIcon } = icons;
  const {
    testRunTableData,
  } = mockObject;
  const computedProps = cloneDeep(props);
  delete computedProps.classes;

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item sm={7} xs={12}>
          <SelectableList
            data={testRunTableData}
            title={testRunSelectedTitle}
            selectedIndex={testRunSelectedIndex}
            onClick={testRunOnClick}
          />
        </Grid>
      </Grid>
      <Grid container justify="center" alignItems="center">
        <Grid container item xs={12} lg={7}>
          <SectionWrapper border title={developerLabel} icon={developerIcon} sectionTitleVariant="primary">
            <Grid item sm={6} xs={12}>
              <Tooltip title={tooltips.DRIVE_TYPE} placement="top-start">
                <SelectBox things={DriveType} value={driveTypeSelected} name={driveTypeTitle} onChange={driveTypeOnChange} id="driveType"/>
              </Tooltip>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Tooltip title={tooltips.TEST_ENVIRONMENT} placement="top-start">
                <SelectBox things={TestEnv} name={testEnvTitle} value={testEnvSelected} onChange={testEnvOnChange} />
              </Tooltip>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Tooltip title={tooltips.HOW_MANY_RUNS} placement="top-start">
                <NumberPicker name={numberOfRunsLabel} onChange={numberOfRunsOnChange} value={numberOfRuns} />
              </Tooltip>
            </Grid>
            <Grid item sm={6} xs={12} className={classes.email}>
              <Tooltip title={tooltips.EMAIL} placement="top-start">
                <IconButton icon={emailIcon} onClick={openEmail} />
              </Tooltip>
            </Grid>
          </SectionWrapper>
          <SectionWrapper border title={firmWareTitle} icon={firmwareIcon} sectionTitleVariant="primary">
            <LandingPageSub {...computedProps} />
          </SectionWrapper>
          {/* <Generator componentJson={generatorMock} /> */}
          <Grid item sm={12} xs={12}>
            {location.pathname === TEST_CONFIGURATION_PATH && <TestConfigurationPage {...computedProps} /> }
          </Grid>
          <Grid item sm={9} xs={false} />
          <Grid item sm={3} xs={12}>
            <Tooltip title={tooltips.QUEUE} placement="bottom-start">
              <Button
                label="Queue"
                color="secondary"
                size="large"
                variant="outline"
                onClick={setUpQueueBuild}
              />
            </Tooltip>
          </Grid>
          <Modal onClose={handleModalClose} open={modalOpen} title={modalHeader} subText={modalSubText}>
            <div className={classes.runsSuccessful}>
              <CircularProgress variant="static" value={percentRunsSuccessful} size={200} />
            </div>
          </Modal>
        </Grid>
      </Grid>
      <LoadingSpinner loadingMsg={LOADING_SPINNER_TEXT} isVisible={isLoading}/>
      <EmailDialog
        emails={emails}
        open={emailOpen}
        handleClose={emailHandleClose}
        handleAddItemClick={handleAddItemClick}
        handleChange={emailHandleChange}
      />
    </div>
  );
};
export { LandingPage };
