/**
 * Actual Redux Store Object
 */
export type State = {
  oauthCode: string,
  token: {
    access_token: string,
    expires_in: string,
    refresh_token: string,
    scope: string,
    token_type: string,
    DriveType: Array,
    TestEnv: Array,
    Branches: Array,
  },
  loading: Boolean,
};
