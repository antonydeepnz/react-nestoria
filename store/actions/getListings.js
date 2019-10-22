export const getListings = (query) => {
  return dispatch => {
    dispatch({type: 'GET_LISTINGS', payload: query})
  }
}