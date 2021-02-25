import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

/**
 * Searchable generic list with autocomplete
 * @param classes: css classes passed into html component
 * @param className: additional classes for the html component
 * @param list: The list that passed in to be filtered to display result of the search
 * @param typography: The typography for the text displayed
 * @param searchLabel: Default text displayed in list selectbox (ex. "Search")
 * @param listID: Unique identifier for the list
 * @param disabled: Flag for whether list is enabled or disabled
 */

type Props = {
    classes: any,
    list: Array,
    label: String,
    listID: String,
    disabled: boolean,
    variant: String
};

const SearchableList = (props: Props) => {
  const {
    classes,
    list,
    label,
    listID,
    disabled,
    variant,
  } = props;

  return (
    <Autocomplete
      className={classes.root}
      id={listID}
      disabled={disabled}
      autoHighlight
      getOptionLabel={option => option.title}
      options={list}
      renderInput={params => (
        <TextField
          {...params}
          label={label}
          variant={variant}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
  );
};

SearchableList.defaultProps = {
  disabled: false,
  variant: 'outlined',
  list: [{ title: 'Selectable' }],
  listID: 'searchableList',
  label: 'Item',
};

export { SearchableList };
