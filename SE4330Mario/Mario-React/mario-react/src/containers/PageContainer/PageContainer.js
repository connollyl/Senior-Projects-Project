/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */

import React, { Component, Fragment, ReactNode } from 'react';
import { withStyles } from '@material-ui/core';
import cn from 'classnames';
import { styles } from './PageContainer.styles';
import AppBar from '../../components/Appbar';
import { DEFAULT_PATH, HELP_PATH } from '../../constants/route-paths';

/**
 * Used to wrap all pages, to ensure that the app bar appears onto all pages,
 * and any additional components that are desirec on all pages appear there.
 * Also ensures all pages share the same styles
 * @param classes: css classes injeted into the page
 * @param children: The page that is being injected into the page container
 * @param projects: Projects that will appear inside the app bar
 * @param updateSelectedProjectAction: Action fired whenever the project select box is changed
 */
type Props = {
  classes: any;
  children: ReactNode;
  Projects: [];
  updateSelectedProjectAction: any;
  getReposAction: any;
  getTreeViewDataAction: any;
  setSelectedRepoAction: any;
  getBranchDataAction: any;
  token: any;
  repos: Array;
  selectedProject: String;
};

const PageContainer = (pageNum: Number) => (WrapComp: any) => {
  class Container extends Component<Props> {
    render() {
      const {
        classes,
        Projects,
        updateSelectedProjectAction,
        getReposAction,
        setSelectedRepoAction,
        getTreeViewDataAction,
        getBranchDataAction,
        token,
        repos,
        selectedProject,
      } = this.props;
      const navigateHome = () => {
        window.location.href = `/#${DEFAULT_PATH}`;
      };

      const navigateHelp = () => {
        window.location.href = `/#${HELP_PATH}`;
      };

      const updateProject = (projectName) => {
        updateSelectedProjectAction(projectName);
      };

      const loadRepos = async () => {
        getReposAction(token.access_token, selectedProject || Projects[0]);
      };

      const updateRepos = (newRepo) => {
        setSelectedRepoAction({ selectedRepo: newRepo });
        getTreeViewDataAction(token.access_token, selectedProject || Projects[0], newRepo);
        getBranchDataAction(token.access_token, selectedProject || Projects[0], newRepo);
      };

      return (
        <Fragment>
          <div className={cn(classes.header)}>
            <AppBar
              color="blue"
              typography=""
              homeOnClick={navigateHome}
              navigateHelp={navigateHelp}
              loadRepos={loadRepos}
              repos={repos || []}
              reposOnChange={updateRepos}
              Projects={Projects || []}
              onProjectsChange={updateProject}
            />
          </div>
          <div className={cn(classes.pageSpace, { [classes.hardStop]: pageNum === 'zero' })}>
            <WrapComp {...this.props} />
          </div>
        </Fragment>
      );
    }
  }
  return withStyles(styles)(Container);
};

export { PageContainer };
