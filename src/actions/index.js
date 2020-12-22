import jsonPlaceholder from '../apis/jsonPlaceholder';

// Refactor
// 1. remove function keyword and use arrow function
// 2. remove getState param because we are not using it
// 3. remove () around dispatch
// 4. remove return statement and brackets since we are returning 1 single thing
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response});
};

export const fetchPostsBeforeRefactor = () => {
    // Because Redux Thunk allows to return a function
    return async function(dispatch, getState){
        // dispatch => same Redux dispatch function
        // getState => same Redux getState function to get the state of the Redux store
        const response = await jsonPlaceholder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response});
    };
};

export const selectPost = () => {
    return {
        type: 'SELECT_POST'
    }
};
