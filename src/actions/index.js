import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  // Because Redux Thunk allows to return a function
  return function(dispatch, getState){
      // dispatch => same Redux dispatch function
      // getState => same Redux getState function to get the state of the Redux store
      const promise = jsonPlaceholder.get('/posts');

      return {
          type: 'FETCH_POSTS',
          payload: promise
      };
  }
};