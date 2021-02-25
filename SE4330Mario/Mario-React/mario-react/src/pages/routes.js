import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TestConfigurationPageRoute } from './TestConfigurationPage';
import { ExecutionPageRoute } from './ExecutionPage';
import { LandingPageRoute } from './LandingPage';
import { AdminPageRoute } from './AdminPage';
import { HelpPageRoute } from './HelpPage';
import { LoginPathRoute } from './LoginPage';

/**
 * Creates Routes for page navigation
 */
const createRoutes = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path={LandingPageRoute.path} component={LandingPageRoute.component} />
        {/* Add new routes to array */}
        {
          [
            TestConfigurationPageRoute,
            ExecutionPageRoute,
            AdminPageRoute,
            HelpPageRoute,
            LoginPathRoute,
          ].map((settings, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Route exact key={`Route-${index}`} {...settings} />
          ))}
        <Redirect exact from="/" to={LandingPageRoute.path} />
      </Switch>
    </Suspense>
  );
};

// eslint-disable-next-line import/no-default-export
export default createRoutes;

