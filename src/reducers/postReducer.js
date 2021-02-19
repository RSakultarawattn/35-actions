import { CREATE_POST, DELETE_POST } from '../actions/postActions';
import getIndex from '../utils/getIndex';

export const initialState = {
  posts: {}
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_POST: {
      const newIndex = getIndex(state.posts);
      const posts = { ...state.posts };
      posts[newIndex] = action.payload;

      return {
        ...state,
        posts
      };
    }
      
    case DELETE_POST: {
      const index = action.payload;
      const posts = { ...state.posts };

      delete posts[index];

      return {
        ...state,
        posts
      };
    }
    default:
      return state;
  }
};

export default reducer;
