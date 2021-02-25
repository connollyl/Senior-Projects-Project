import React from 'react';
/**
 * This is the wrapper for the login page.
 * @param classes: css classes passed to the html component
 */
type Props = {
  classes: any;
};

const LoginWrapper = (WrappedComponent: any) => {
  const LoginPageWrapper = (props: Props) => {
    // const {
    //   navigate,
    // } = props;
    const pageProps = {
      ...props,
    };
    return <WrappedComponent {...pageProps} />;
  };
  return LoginPageWrapper;
};

export { LoginWrapper };

