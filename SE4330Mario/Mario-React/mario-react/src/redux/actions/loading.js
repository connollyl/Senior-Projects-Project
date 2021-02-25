export const SET_LOADING_ACTION = 'SET_LOADING_ACTION';

export const setLoadingAction = isLoading => ({
  type: SET_LOADING_ACTION,
  payload: { isLoading },
});

export const loadingAction = (isLoading) => {
  return setLoadingAction(isLoading);
};
