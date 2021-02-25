const styles = theme => ({
  root: {
    marginBottom: '2%',
    width: '100%',
  },
  section: {
    padding: '2.5% 3.2% 5% 3.2%',
    width: '100%',
  },
  header: {
    marginLeft: '10px',
    marginBottom: '0.5rem',
  },
  sectionBackground: {
    background: theme.palette.lightBackgroundColor,
  },
  noPadSection: {
    padding: 0,
  },
  subtitle: {
    margin: '3% 0 2% 0',
    paddingLeft: '1px !important',
    lineHeight: '1.375',
    marginTop: '0px',
  },
  icon: {
    marginLeft: '-1%',
    marginRight: '-.5%',
    alignSelf: 'center',
    [theme.breakpoints.down('md')]: {
      marginTop: '0.5%',
    },
  },
  border: {
    border: '1px solid #ADADAD',
    borderRadius: theme.shape.borderRadius,
  },
});

export { styles };
