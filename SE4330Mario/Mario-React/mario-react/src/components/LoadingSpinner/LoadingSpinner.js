import React from 'react';
import Grid from '@material-ui/core/Grid';
import cn from 'classnames';
import CircularProgress from '@material-ui/core/CircularProgress';

/**
 * The purpose of this component is to act as a progress symbol for whenever
 * the application is either making async calls or when it is initially starting up
 * @param classes: jss classes assigned to the component
 * @param loadingMsg: Message displayed on the loading spinner
 * @param isVisible: This determines rather or not the spinner is displayed.
 */
export type Props = {
  classes: any;
  loadingMsg: string;
  isVisible: boolean;
};

const LoadingSpinner = (props: Props) => {
  const {
    classes,
    loadingMsg,
    isVisible,
  } = props;
  return (
    <Grid container spacing={0} className={cn({ [classes.hidden]: !isVisible })}>
      <Grid item xs={12}>
        <div className={classes.spinnerBackground} />
        <div className={classes.root}>
          <div className={classes.box}>
            <CircularProgress
              variant="determinate"
              value={100}
              className={classes.top}
              size={80}
              thickness={4}
            />
            <CircularProgress
              variant="indeterminate"
              disableShrink
              className={classes.bottom}
              size={80}
              value={25}
              thickness={4}
            />
            <div className={classes.headingMain}>
              {loadingMsg}
            </div>
          </div>
        </div>

      </Grid>
    </Grid>
  );
};

LoadingSpinner.defaultProps = {
  loadingMsg: 'Loading...',
  isVisible: true,
};

export { LoadingSpinner };
