
import React from 'react';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid/v4';
import SectionWrapper from '@components/SectionWrapper';
import LoadingSpinner from '../../../components/LoadingSpinner';
import
{
  helpPageContentDeveloper, helpPageContentExecution, helpPageContentTester, helpPageContentAdmin,
} from '../../../constants/content';
import Title from '../../../components/Title';
/**
 * This page displays the help information for the different pages.
 * @param classes: css classes passed to the html component
 * @param isLoading: boolean variable tracking if page is loading
 */
type Props = {
  classes: any,
  isLoading: Boolean,
};

const HelpPage = (props: Props) => {
  const {
    classes,
    isLoading,
  } = props;

  const renderHelp = (helpPageContent) => {
    return (
      helpPageContent.map((value) => {
        return (
          <div key={uuid()}>
            <Title size="small" title={value.header} />
            {
              value.discription.map((subtext) => {
                return (
                  <ul className={classes.bullets} key={uuid()}>
                    <li className={classes.listItem} >{subtext}</li>
                  </ul>
                );
              })
            }
          </div>
        );
      })
    );
  };
  return (
    <div className={classes.root}>
      <LoadingSpinner loadingMsg="Loading..." isVisible={isLoading}/>
      <Grid container justify="center" alignItems="center">
        <Grid container item xs={12} lg={7}>
          <SectionWrapper border title="Developer View" icon="code" sectionTitleVariant="primary">
            { renderHelp(helpPageContentDeveloper)}
          </SectionWrapper>
          <SectionWrapper border title="Test Configuration View" icon="check" sectionTitleVariant="primary">
            {renderHelp(helpPageContentTester)}
          </SectionWrapper>
          <SectionWrapper border title="Execution View" icon="equalizer" sectionTitleVariant="primary">
            {renderHelp(helpPageContentExecution)}
          </SectionWrapper>
          <SectionWrapper border title="Admin View" icon="settings" sectionTitleVariant="primary">
            {renderHelp(helpPageContentAdmin)}
          </SectionWrapper>
        </Grid>
      </Grid>
    </div>
  );
};
export { HelpPage };
