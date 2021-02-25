/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Title from '../../../components/Title';
import SelectBox from '../../../components/SelectBox';
import Input from '../../../components/Input';

type Props = {
  classes: any,
  firmWareProps: any;
  powerCardProps: any;
  firmWareOnChange: any;
  powerCardOnChange: any;
  applicationOnChange: any;
  cCArtifactArtifcatSelected: any;
  pCArtifactArtifcatSelected: any;
  applicationArtifactsSelected: any;
  parsedArtifacts: any;
  applicationProps: any;
};

const LandingPageSub = (props: Props) => {
  const {
    classes,
    firmWareProps,
    powerCardProps,
    firmWareOnChange,
    powerCardOnChange,
    applicationOnChange,
    cCArtifactArtifcatSelected,
    pCArtifactArtifcatSelected,
    applicationArtifactsSelected,
    parsedArtifacts,
    applicationProps,
  } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Title title={firmWareProps().title} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <SelectBox
            things={parsedArtifacts}
            name="Firmware"
            id="select-artifact-0"
            onChange={firmWareOnChange}
            value={cCArtifactArtifcatSelected}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Input color="primary" label="" name="artifact-0" id="artifact-0" placeholder="Enter/Choose Artifact" variant="filled"/>
        </Grid>
        <Grid item xs={12}>
          <Title title={powerCardProps().title} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <SelectBox
            things={parsedArtifacts}
            name="Power Card"
            id="select-artifact-1"
            onChange={powerCardOnChange}
            value={pCArtifactArtifcatSelected}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Input color="primary" label="" name="artifact-1" id="artifact-1" placeholder="Enter/Choose Artifact" variant="filled"/>
        </Grid>
        <Grid item xs={12}>
          <Title title={applicationProps().title} />
        </Grid>
        <Grid item sm={6} xs={12}>
          <SelectBox
            things={parsedArtifacts}
            name="Application"
            id="select-artifact-2"
            onChange={applicationOnChange}
            value={applicationArtifactsSelected}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Input color="primary" label="" name="artifact-2" id="artifact-2" placeholder="Enter/Choose Artifact" variant="filled"/>
        </Grid>
      </Grid>
    </div>
  );
};

export { LandingPageSub };
