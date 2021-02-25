import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  font: {
    weight: {
      bold: 700,
      semibold: 600,
    },
    color: {
      primary: {
        main: '#003DA5',
      },
      secondary: {
        main: '#D50032',
      },
      tertiary: {
        main: '#0742A6',
      },
      standard: {
        gray: '#919191',
        green: '#7A9E2F',
        placeholder: '#717073',
      },
      copy: {
        primary: '#404040',
        secondary: '#FFFFFF',
      },
      error: {
        main: '#DC1E35',
      },
    },
    family: {
      primary: '\'Open Sans\', sans-serif',
      secondary: '\'Oswald\', sans-serif',
      tertiary: '\'Georgia\', serif',
    },
    size: {
      primary: 16,
    },
  },
  background: {
    color: {
      light: '#FFFFFF',
      medium: '#EDEDED',
      dark: '#717073',
      input: '#F7F7F7',
      main: '#003DA5',
      red: '#CA353C',
      darkBlue: '#2f6bc4',
      lightGreen: '#A3D341',
      button: '#f2f2f2',
      black30: 'rgba(0,0,0, 0.3)',
      black65: 'rgba(0,0,0, 0.65)',
      black70: 'rgba(0,0,0, 0.7)',
    },
  },
  border: {
    color: {
      primary: '#ADADAD',
      input: '#717073',
      main: '#003DA5',
      line: '#CFCFCF',
    },
    shape: {
      radius: '2px',
    },
    boxShadow: '0px 3px 6px rgba(0,0,0,0.08)',
  },

  // old theme setup so nothing breaks
  breakpoints: {
    values: {
      xs: 360,
      sm: 480,
      md: 768,
      lg: 960,
      xl: 1366,
    },
  },
  palette: {
    primary: {
      main: '#003DA5',
    },
    secondary: {
      main: '#D50032',
    },
    copy: {
      primary: '#404040',
      secondary: '#FFFFFF',
      tertiary: '#285BA7',
    },
    error: {
      main: '#DC1E35',
    },
    borderColor: '#ADADAD',
    headingColor: '#404040',
    lineBorderColor: '#CFCFCF',
    spinnerLeft: '#285BA7',
    spinner: '#ADE0EE',
    inactive: '#919191',
  },
  typography: {
    // TODO: maybe add fontWeights here
    primaryFont: '\'Open Sans\', sans-serif',
    secondaryFont: '\'Oswald\', sans-serif',
    tertiaryFont: '\'Georgia\', serif',
    primaryFontSize: 16,
    useNextVariants: true,
  },
  props: {
    MuiGrid: {
      spacing: 10,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  shape: {
    borderRadius: 2,
  },
});
export const values = {
  xs: 360,
  sm: 480,
  md: 768,
  lg: 960,
  xl: 1366,
};
export { theme };

