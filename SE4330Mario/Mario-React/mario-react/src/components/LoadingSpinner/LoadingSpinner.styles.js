import { createStyles } from '@material-ui/core';

const styles = () => createStyles({
  hidden: {
    display: 'none',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    zIndex: 9999,
    overflow: 'auto',
    animation: 'loadingOpen 0.2s ease-in-out',
    pointerEvents: 'none',

    '&.closing': {
      opacity: 0,
      transform: 'scale(0.25)',
      transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out',
    },
  },
  spinnerBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    background: 'black',
    position: 'fixed',
    zIndex: 8000,
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
  },
  '@keyframes loadingOpen': {
    from: {
      opacity: 0,
      transform: 'scale(0.25)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
  '@keyframes loadingSpinnerSpin': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '200px',
    backgroundColor: '#EDEDED',
    padding: '40px 80px',
    borderRadius: '2px',
    border: '1px solid #CFCFCF',
    pointerEvents: 'all',
  },
  headingMain: {
    margin: '10px 0 0 8px',
  },
  top: {
    color: '#285BA7',
    opacity: 0.25,
  },
  bottom: {
    color: '#285BA7',
    animationDuration: '0.75s',
    position: 'absolute',
  },
});

export { styles };
