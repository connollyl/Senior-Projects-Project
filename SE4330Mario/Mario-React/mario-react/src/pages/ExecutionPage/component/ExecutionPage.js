
import React, { useEffect, useState, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@components/IconButton';
import LoadingSpinner from '../../../components/LoadingSpinner';
import { LOADING_SPINNER_TEXT } from '../../../constants/content';
import DataTable from '../../../components/DataTable';
import SectionWrapper from '../../../components/SectionWrapper';
/**
 * This page shows the progress of currently running and previously ran builds.
 * Redux actions:
 *   - getBuildInfoAction
 * @param classes: css classes passed to the html component
 * @param isLoading: boolean variable tracking if page is loading
 * @param token: OAuth token unique to each user
 */
type Props = {
  classes: any,
  isLoading: Boolean,
  token: any,
  selectedProject: String,
  Projects: [],
  getBuildInfoAction: (accessToken) => {},
};

const ExecutionPage = (props: Props) => {
  const {
    classes,
    isLoading,
    token,
    selectedProject,
    getBuildInfoAction,
    Projects,
  } = props;
  /**
   * everything below here and above the return statement needs to be extracted to the wrapper
   * and passed through page props. Look at AdminPage.js and AdminPageWrapper.js
   */
  const [buildList, setBuildList] = useState();
  const getBuildInfo = async () => {
    const accessToken = token.access_token;
    const getBuildList = await getBuildInfoAction(accessToken, selectedProject || Projects[0]);
    setBuildList(getBuildList.data.builds);
  };
  useEffect(() => {
    getBuildInfo();
  }, []);
  return (
    <Fragment>
      <LoadingSpinner loadingMsg={LOADING_SPINNER_TEXT} isVisible={isLoading}/>
      <Grid container justify="center" alignItems="center">
        <Grid container item xs={12} lg={9}>
          <SectionWrapper border title="Execution" icon="equalizer" sectionTitleVariant="primary">
            {buildList && <DataTable rows={buildList} /> }
            <Grid item xs={1}>
              <IconButton edge="end" aria-label="refresh" icon="refresh" className={classes.btnStyle} onClick={getBuildInfo} />
            </Grid>
          </SectionWrapper>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export { ExecutionPage };
