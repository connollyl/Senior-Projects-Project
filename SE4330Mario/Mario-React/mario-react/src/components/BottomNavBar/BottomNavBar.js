import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

/**
 * The purpose of this component is to give the user the ability to move
 * to the next page of the program
 * Typical uses are whenever there is a need to move pages in a program
 * @param classes: css class passed to the html component
 * @param prevPageHref: string reference to the previous page
 * @param nextPageHref: string reference to the next page
 * @param prevDisabled: bool to decided if prev button is disabled
 * @param nextDisabled: bool to decided if next button is disabled
 */

type Props = {
  classes: any,
  prevPageHref: string,
  nextPageHref: string,
  prevDisabled: boolean,
  nextDisabled: boolean
};

const BottomNavBar = (props: Props) => {
  const {
    classes,
    prevPageHref,
    nextPageHref,
    prevDisabled,
    nextDisabled,
  } = props;
  return (
    <Grid container justify="space-around">
      <Grid key="Back" item>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          href={prevPageHref}
          disabled={prevDisabled}
        >
          Back
        </Button>
      </Grid>
      <Grid key="Next" item>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          href={nextPageHref}
          disabled={nextDisabled}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
};
BottomNavBar.defaultProps = {
  prevDisabled: false,
  nextDisabled: false,
};

export { BottomNavBar };
