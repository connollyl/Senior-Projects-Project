import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import SelectableTable from '../../../../components/SelectableTable';

export type Props = {
  classes: any;
  artifacts: any;
  artifactsOnChange: (value) => {};
}

/**
 * This subcomponent is used to display the artifacts subsection of the landing page
 * @param classes: css class component
 */

const Artifacts = (props: Props) => {
  const {
    classes,
    artifacts,
    artifactsOnChange,
  } = props;
  const [artifactsData, setArtifactsData] = useState([]);
  useEffect(() => {
    const newArtifactsData = [];
    if (artifacts && artifacts.value) {
      artifacts.value.forEach((artifact) => {
        const artifactName = `${artifact.name}`;
        newArtifactsData.push({
          Artifact: artifact.name,
          name: artifactName,
        });
      });
      setArtifactsData(newArtifactsData);
    }
  }, [artifacts]);
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <SelectableTable rows={artifactsData} artifactsOnChange={artifactsOnChange} />
        </Grid>
      </Grid>
    </div>
  );
};

export { Artifacts };
