import { State } from './types';

export const initialState: State = {
  oauthCode: '',
  token: {
    access_token: '',
    expires_in: '',
    refresh_token: '',
    scope: '',
    token_type: '',
  },
  DriveType: [],
  TestEnv: [],
  branches: [],
  isLoading: false,
  artifacts: [],
  Projects: [],
  repos: [],
  selectedRepo: '',
  treeData: {},
  builds: {
    builds: [
      {
        id: 781,
        buildNumber: '20200304.4',
        finishedTime: '2020-03-04T01:29:22.5130227Z',
        status: 'completed',
        author: 'Microsoft.VisualStudio.Services.TFS',
        tags: [],
        results: 'succeeded',
        queuedTime: '2020-03-04T01:25:29.1564389Z',
      }],
  },
  driveType: [
    {
      name: '',
    }],
  envoType: [
    {
      name: '',
    }],
  selectedProject: '',
};
