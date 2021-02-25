import React from 'react';
/**
 * This is the wrapper for the execution page. This is not implemented properly
 * This should handle the logic that is currently located in ExecutionPage.js
 * For an example, base your changes off of the Admin Page
 * @param classes: css classes passed to the html component
 */
type Props = {
  classes: any;
};

const ExecutionWrapper = (WrappedComponent: any) => {
  const ExecutionPageWrapper = (props: Props) => {
    // const {
    //   navigate,
    // } = props;
    const pageProps = {
      ...props,
    };
    return <WrappedComponent {...pageProps} />;
  };
  return ExecutionPageWrapper;
};

export { ExecutionWrapper };

