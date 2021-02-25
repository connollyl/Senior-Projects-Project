## How to setup initially
Requirements Node 12.13.1 or newer.

Install the recommended version of node from https://nodejs.org/en/ for your operating system

Run npm install -g npm@latest

Change directory to the folder with the package.json in it
Run npm install

Download vs code https://code.visualstudio.com/download

Add the following extensions to vs code and then restart vs code
beautify
chrome dev tools
npm
jslint
eslint

(If project asks for recommendation to update jslint install the command recommended in their documention for global jslint)

(To run non deployed version of app)
Go to chrome
Install the extension redux devtools https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

Running the app
Run the command npm run start (in the directory with package.json
Wait for app to open up
Wait for it to redirect to repo
Copy query string from repo (aka ?code=blahblahblah)
goto localhost:8080/#/landing?{paste querystring here)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## Project Set Up

### `npm install`
Run npm install in the directory containing the package.json before attempting to run any of the following scripts.
This will create a node_modules folder, package-lock file, and install all node dependencies/libraries
Note: This may take awhile the first time you run it

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run storybook`

Builds and runs storybook

Storybook is a testing framework that enables a developer to test styles and different states of a component based on passed in properties

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

## Libraries used in this project
Material Design: https://material.io/components/
Storybook: https://storybook.js.org/docs/basics/introduction/
Jest: https://jestjs.io/docs/en/getting-started
Redux: https://redux.js.org/
JSS: https://jss.sitecore.com/
