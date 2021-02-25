import React from 'react';

type Props = {
  classes: any;
  setLoadingAction: any;
};

const HelpWrapper = (WrappedComponent: any) => {
  const HelpPageWrapper = (props: Props) => {
    const pageProps = {
      ...props,
    };
    return <WrappedComponent {...pageProps} />;
  };
  return HelpPageWrapper;
};

export { HelpWrapper };

