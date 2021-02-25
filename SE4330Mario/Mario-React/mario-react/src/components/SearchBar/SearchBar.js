import React from 'react';
import InputBase from '@material-ui/core/InputBase';

/**
 * The purpose of this component is to act as a generic
 * Search Bar
 * Typical uses are whenever there is a need for a customer to input text to search something
 * @param classes: css classes passed into html component
 * @param list: The list that passed in to be filtered to display result of the search
 */
export type Props = {
  classes: any,
  list: Array,
}

const SearchBar = (props: Props) => {
  const {
    classes,
    list,
  } = props;

  const updateList = (e) => {
    list.filter(() => list.contains(e.target.value));
  };

  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search…"
        onChange={updateList}
        classes={classes}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};

export { SearchBar };
