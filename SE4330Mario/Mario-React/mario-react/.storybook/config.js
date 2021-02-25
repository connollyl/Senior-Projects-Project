import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { JssProvider } from 'react-jss';
import { MuiThemeProvider } from '@material-ui/core';
import { jss } from '../src/assets/styles/global.styles';
import { theme } from '../src/config/theme';

const req = require.context('../src/components', true, /\.stories\.js$/);

const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

// make class names consistent for snapshot testing
const generateClassName = (rule, sheet) => `${sheet.options.classNamePrefix}${rule.key}`;
const jssDecorator = storyFn => (
  <MuiThemeProvider theme={theme}>
    <JssProvider generateClassName={generateClassName} jss={jss}>
      {storyFn()}
    </JssProvider>
  </MuiThemeProvider>
);

addDecorator(jssDecorator);
// addDecorator(withKnobs);

configure(loadStories, module);