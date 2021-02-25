import React, { SyntheticEvent } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@components/Input';
import SelectableList from '@components/SelectableList';
import IconButton from '@components/IconButton';
import SelectBox from '@components/SelectBox';
import SectionWrapper from '@components/SectionWrapper';
import content from '../../mocks/content.json';

/**
 * This is the subcomponent for the build ID mapping section, it contains the
 * components used to add a new mapping and also see a list of current mappings.
 * This sections logic is handled in the AdminPageWrapper
 * NOTE: once there are nicknames associated with the mappings
 * To get the list to show those map nicknames rather than the buildID number,
 * simply replace the data tag of that selectable list with "nickNameString" and
 * remove the buildIDMap variable from the props
 */
type Props = {
  addOnClick: any;
  buildIDEntered: any,
  buildIDOnChange: () => {},
  buildMapID: any;
  classes: any,
  driveString: any;
  envString: any;
  handleMapDriveTypeSelected: (value: SyntheticEvent) => {};
  handleMapTestEnvSelected: (value: SyntheticEvent) => {};
  handleSetSelectedBuildIDIndex: (value: SyntheticEvent) => {};
  mapDriveTypeSelected: string;
  mapTestEnvSelected: string;
  nickNameEntered: any,
  nickNameOnChange: () => {},
  removeMap: any;
  selectedBuildIDIndex: Number;
  // nickNameString: any;
};

const MapSection = (props: Props) => {
  const {
    addOnClick,
    buildIDEntered,
    buildIDOnChange,
    buildMapID,
    classes,
    driveString,
    envString,
    handleMapDriveTypeSelected,
    handleMapTestEnvSelected,
    handleSetSelectedBuildIDIndex,
    mapDriveTypeSelected,
    mapTestEnvSelected,
    nickNameEntered,
    nickNameOnChange,
    removeMap,
    selectedBuildIDIndex,
    // nickNameString,
  } = props;

  return (
    <SectionWrapper border title="Map" icon="map" sectionTitleVariant="primary">
      <Grid container justify="center" alignItems="center">
        <Grid item xs={8}>
          <h1 className={classes.listTitles}>Build ID Mappings</h1>
          <Grid item xs={12} sm={7} >
            <SelectableList
              data={buildMapID}
              selectedIndex={selectedBuildIDIndex}
              onClick={handleSetSelectedBuildIDIndex}
            />
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Input
            label="Config Nickname"
            id={content.nickNameTitle}
            value={nickNameEntered}
            onChange={nickNameOnChange}
          />
        </Grid>
        <Grid item xs={8}>
          <Input
            label="Build ID#"
            id={content.buildIDTitle}
            value={buildIDEntered}
            onChange={buildIDOnChange}
          />
        </Grid>
        <Grid item xs={8}>
          <SelectBox
            className={classes.select}
            things={driveString}
            name={content.driveTypeTitle}
            value={mapDriveTypeSelected}
            onChange={handleMapDriveTypeSelected}
            id={`select-box-${content.driveTypeTitle}`}
          />
        </Grid>
        <Grid item xs={8}>
          <SelectBox
            className={classes.select}
            things={envString}
            name={content.testEnvTitle}
            value={mapTestEnvSelected}
            onChange={handleMapTestEnvSelected}
            id={`select-box-${content.testEnvTitle}`}
          />
        </Grid>
        <Grid container item xs={8} spacing={2}>
          <Grid item xs={2}>
            <IconButton edge="end" aria-label="add" icon="add" onClick={addOnClick} />
          </Grid>
          <Grid item xs={2}>
            <IconButton edge="end" aria-label="delete" icon="delete" className={classes.btnStyle} onClick={removeMap} />
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};
export { MapSection };
