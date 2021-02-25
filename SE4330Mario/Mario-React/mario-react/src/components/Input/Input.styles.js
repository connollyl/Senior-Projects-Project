import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
  root: {
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    fontFamily: '\'Open Sans\', sans-serif',
    width: '100%',
  },
  label: {
    paddingBottom: '7px',
    paddingLeft: '0 !important',
  },
  input: {
    borderRadius: 2,
    padding: '1.25rem 0.625rem',
    height: '48px',
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0.9rem 0.563rem',
    },
    border: '1px solid #717073',
    background: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8125rem',
    },
    '&:focus': {
      outline: 0,
      borderColor: '#003DA5',
      boxShadow: '-1px 2px 11px 0px rgba(207,207,207,0.6)',
    },
    // placeholders
    '&::-webkit-input-placeholder': {
      /* Chrome/Opera/Safari */
      color: '#717073',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    '&::-moz-placeholder': {
      /* Firefox 19+ */
      color: '#717073',
      fontStyle: 'italic',
      fontWeight: 400,
    },

    '&:-ms-input-placeholder': {
      /* IE 10+ */
      color: '#717073',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    '&::placeholder': {
      color: '#717073',
      fontStyle: 'italic',
      fontWeight: 400,
    },
  },
  error: {
    borderColor: '#DC1E35',
    // placeholders
    '&::-webkit-input-placeholder': {
      /* Chrome/Opera/Safari */
      color: '#ADADAD',
    },
    '&::-moz-placeholder': {
      /* Firefox 19+ */
      color: '#ADADAD',
    },

    '&:-ms-input-placeholder': {
      /* IE 10+ */
      color: '#ADADAD',
    },
    '&::placeholder': {
      color: '#ADADAD',
    },
  },
  errorMsg: {
    paddingTop: '5px',
    color: '#DC1E35',
    fontSize: '0.875rem',
  },
  inactive: {
    backgroundColor: '#EDEDED',
  },
});

export { styles };
