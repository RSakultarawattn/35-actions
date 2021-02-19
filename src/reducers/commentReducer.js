import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';
import { DELETE_POST } from '../actions/postActions';


export const initialState = {
  comments: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state, 
        comments: [...state.comments, action.payload]
      };
    case DELETE_COMMENT: {
      const comments = state
        .comments
        .filter(comment => comment.body !== action.payload);

      return {
        ...state, 
        comments
      };
    }
      
    case DELETE_POST:
      return initialState(state, action.payload);
      
    default:
      return state;
  }
};

export default reducer;
