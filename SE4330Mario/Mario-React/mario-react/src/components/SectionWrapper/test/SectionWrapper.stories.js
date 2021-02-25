import React from 'react';
import { storiesOf } from '@storybook/react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SectionWrapper from '../index';

const stories = storiesOf('SectionWrapper', module);

const requiredProps = () => ({
  id: 'section-wrapper',
  title: 'Out-of-Pocket Costs',
  icon: 'refreshReset',
});

stories.add('Title and Icon', () => (
  <SectionWrapper
    {...requiredProps()}
  />
));

stories.add('Title, Icon, Subtitles', () => (
  <SectionWrapper
    id="section-wrapper"
    title="Out-of-Pocket Costs"
    subtitle="This is my subtitle"
    titleVariant="primary"
  />
));

stories.add('With Content', () => (
  <SectionWrapper
    {...requiredProps()}
    subtitle="This is my subtitle"
  >
    <form style={{ width: '100%' }}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            id="name"
            label="First Name"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="name"
            label="Last Name"
          />
        </Grid>
      </Grid>
    </form>
  </SectionWrapper>
));

stories.add('With Content, No Padding', () => (
  <SectionWrapper
    {...requiredProps()}
    containerPadding={false}
  >
    <Grid container>
      <Grid item xs={6}>
        <img src="https://via.placeholder.com/150x60" alt="placeholder" style={{ width: '100%', height: '100%' }} />
      </Grid>
    </Grid>

  </SectionWrapper>
));

stories.add('Secondary Title', () => (
  <SectionWrapper
    {...requiredProps()}
    sectionTitleVariant="secondary"
    icon={null}
  >
    <form style={{ width: '100%' }}>
      <Grid container>
        <Grid item xs={6}>
          <TextField
            id="name"
            label="First Name"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="name"
            label="Last Name"
          />
        </Grid>
      </Grid>
    </form>
  </SectionWrapper>
));
