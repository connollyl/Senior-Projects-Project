import React, { Fragment, SyntheticEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@components/IconButton';
import Input from '@components/Input';
import LoadingSpinner from '@components/LoadingSpinner';
import SelectableList from '@components/SelectableList';
import SectionWrapper from '@components/SectionWrapper';
import cloneDeep from 'lodash/cloneDeep';
import { LOADING_SPINNER_TEXT } from '../../../constants/content';
import MapSection from '../subcomponent/mapSection';

/**
 * This is the page that allows the admin to add and delete test environments and drive types.
 * It also allows the user add and create build ID mappings.
 * @param classes: css classes passed to the html component
 * @param driveTypeOnChange: updates the page when a new drive type is selected
 * @param driveTypeSelected: drive type that the user has selected
 * @param testEnvOnChange: updates the page when a new test environmnent is selected
 * @param testEnvSelected: test environment that the user has selected
 * @param isLoading: boolean variable tracking if page is loading
 * @param buildIdSelectedIndex: index of selected build Id
 * @param addOnClick: event fired when add button is clicked
 */
type Props = {
  classes: any,
  driveTypeOnChange: () => {},
  driveTypeSelected: () => {},
  testEnvOnChange: () => {},
  testEnvSelected: () => {},
  isLoading: Boolean,
  buildIdSelectedIndex: any,
  addOnClick: any;
  addDriType: any;
  addDriEnv: any;
  removeDriEnv: any;
  removeDriType: any;
  driveString: any;
  envString: any;
  buildMapID: any;
  handleNewDriveTypeOnChange: (event: SyntheticEvent) => {};
  handleNewEnvOnChange: (event: SyntheticEvent) => {};
  testEnvOnChange: (value: string) => {};
  newDriveType: string;
  newEnv: string;
};

const AdminPage = (props: Props) => {
  const {
    classes,
    isLoading,
    driveTypeOnChange,
    driveTypeSelected,
    testEnvSelected,
    addDriType,
    addDriEnv,
    removeDriEnv,
    removeDriType,
    driveString,
    envString,
    handleNewDriveTypeOnChange,
    handleNewEnvOnChange,
    newDriveType,
    testEnvOnChange,
    newEnv,
  } = props;
  const computedProps = cloneDeep(props);
  delete computedProps.classes;

  const renderOptionsBtn = (addMethod, deleteMethod) => {
    return (
      <Grid item xs={1} className={classes.btnAlign}>
        <IconButton edge="end" aria-label="add" icon="add" className={classes.btnStyle} onClick={addMethod} />
        <IconButton edge="end" aria-label="delete" icon="delete" className={classes.btnStyle} onClick={deleteMethod} />
      </Grid>
    );
  };
  return (
    <Fragment>
      <Grid container justify="center" alignItems="center">
        <Grid container item xs={12} lg={9}>
          <SectionWrapper border title="Configure" icon="settings" sectionTitleVariant="primary">
            <div className={classes.driveType}>
              <Grid item sm={12}>
                <h1 className={classes.listTitles}>Drive Types</h1>
                <SelectableList selectedIndex={driveTypeSelected} onClick={driveTypeOnChange} data={driveString}/>
                <Input
                  multiline
                  placeholder="Enter New Drive Type"
                  value={newDriveType}
                  id="input-box-new-drive-type"
                  onChange={handleNewDriveTypeOnChange}
                />
                {renderOptionsBtn(addDriType, removeDriType)}
              </Grid>
            </div>
            <Grid item sm={3} justify="center" alignItems="center">
              <h1 className={classes.listTitles}>Environments</h1>
              <SelectableList
                selectedIndex={testEnvSelected}
                onClick={testEnvOnChange}
                data={envString}
              />
              <Input
                multiline
                placeholder="Enter New Environment"
                value={newEnv}
                onChange={handleNewEnvOnChange}
                id="input-box-new-env"
              />
              {renderOptionsBtn(addDriEnv, removeDriEnv)}
            </Grid>
          </SectionWrapper>
          <MapSection {...computedProps} />
        </Grid>
      </Grid>
      <LoadingSpinner loadingMsg={LOADING_SPINNER_TEXT} isVisible={isLoading}/>
    </Fragment>
  );
};
export { AdminPage };
