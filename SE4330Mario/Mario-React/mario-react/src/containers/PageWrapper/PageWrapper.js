import React, {
  Component,
  type ComponentType,
} from 'react';
import {
  getOAuth,
  intializeApp,
  postQueueBuild,
  getDevViewData,
  getArtifacts,
  getTestViewData,
  loading,
  getTreeViewData,
  getProjects,
  getRepos,
  getBuildInfo,
  getAdmin,
  postAdminMap,
  postAdminView,
} from '../../redux/actions';

/**
 * Injects props into all pages and hooks redux into pages
 * @param history: history from the dom used for navigation (handles back as well)
 */

type Props = {
  history: any,
}

const PageWrapper = (WrappedComponent: ComponentType<*>) => {
  class Helper extends Component<Props> {
    navigate = (page: string) => {
      const { history } = this.props;
      window.scrollTo(0, 0);
      history.push(page);
    }

    back = () => {
      const { history } = this.props;
      history.goBack();
    }

    render() {
      const pageProps = {
        ...this.props,
        navigate: this.navigate,
        back: this.back,
      };
      return <WrappedComponent {...pageProps} />;
    }
  }
  return Helper;
};

/**
 * Injects the redux state into the props of the page
 * @param {*} state current state in redux
 */
export const mapStateToProps = (state) => {
  return { ...state };
};

/**
 * Enables the handling of the redux calls whenever they are called
 * @param {*} dispatch dispatches redux calls for store manipulation
 */
export const mapStateToDispatch = dispatch => ({
  getOAuthDataAction: async (queryString) => {
    const response = await dispatch(getOAuth.getOAuthDataAction(queryString));
    return Promise.resolve(response);
  },
  getOAuthDataWithToken: async (token) => {
    const response = await dispatch(getOAuth.getOAuthDataWithTokenAction(token));
    return Promise.resolve(response);
  },
  intializeApp: async (queryString) => {
    const response = await dispatch(intializeApp.intialAppLoadAction(queryString));
    return Promise.resolve(response);
  },
  queueBuildAction: async (buildData, accessToken) => {
    const response = await dispatch(postQueueBuild.postQueueBuildAction(buildData, accessToken));
    return Promise.resolve(response);
  },
  getNameAction: async (queryString) => {
    const response = await dispatch(getOAuth.getNameAction(queryString));
    return Promise.resolve(response);
  },
  getLastRunDataAction: async (accessToken, userId, selectedProject, repo) => {
    const response = await dispatch(getDevViewData.getLastRunDataAction(accessToken, userId, selectedProject, repo));
    return Promise.resolve(response);
  },
  getArtifactsAction: async (accessToken, driveType, testEnv, selectedProject) => {
    const response = await dispatch(getArtifacts.getArtifactsAction(accessToken, driveType, testEnv, selectedProject));
    return Promise.resolve(response);
  },
  getProjectsAction: async (accessToken) => {
    const response = await dispatch(getProjects.getProjectsAction(accessToken));
    return Promise.resolve(response);
  },
  getDevViewDataAction: async (accessToken, project, repo) => {
    const response = await dispatch(getDevViewData.getDevViewDataAction(accessToken, project, repo));
    return Promise.resolve(response);
  },
  setLoadingAction: async (loadingState) => {
    const response = await dispatch(loading.loadingAction(loadingState));
    return Promise.resolve(response);
  },
  updateSelectedProjectAction: async (newProject) => {
    const response = await dispatch(getProjects.updateSelectedProjectAction(newProject));
    return Promise.resolve(response);
  },
  getBranchDataAction: async (accessToken, project, repo) => {
    const response = await dispatch(getTestViewData.getTestViewDataAction(accessToken, project, repo));
    return Promise.resolve(response);
  },
  getTreeViewDataAction: async (accessToken, project, repo) => {
    const response = await dispatch(getTreeViewData.getTreeViewDataAction(accessToken, project, repo));
    return Promise.resolve(response);
  },
  getReposAction: async (accessToken, project) => {
    const response = await dispatch(getRepos.getReposAction(accessToken, project));
    return Promise.resolve(response);
  },
  getBuildInfoAction: async(accessToken, selectedProject) => {
    const response = dispatch(getBuildInfo.getBuildInfoAction(accessToken, selectedProject));
    return Promise.resolve(response);
  },
  getAdminAction: async(endpoint, accessToken, selectedProject) => {
    const response = dispatch(getAdmin.getAdminAction(endpoint, accessToken, selectedProject));
    return Promise.resolve(response);
  },
  postAdminViewMapAction: async(method, endPoint, envo, drive, buildID, nickName, accessToken) => {
    const response = dispatch(postAdminMap.postAdminViewMapAction(method, endPoint, envo, drive, buildID, nickName, accessToken));
    return Promise.resolve(response);
  },
  postAdminViewAction: async(method, endPoint, data, accessToken) => {
    const response = dispatch(postAdminView.postAdminViewAction(method, endPoint, data, accessToken));
    return Promise.resolve(response);
  },
  setSelectedRepoAction: async(newRepo) => {
    const response = dispatch(getRepos.setSelectedRepoAction(newRepo));
    return Promise.resolve(response);
  },
});

export { PageWrapper };
