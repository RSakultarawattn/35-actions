import { CREATE_COMMENT, DELETE_POST_COMMENTS, DELETE_COMMENT } from '../actions/commentActions';



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
    case DELETE_POST_COMMENTS: {
      const comments = state
        .comments
        .filter(comment => comment.index !== action.payload);

      return {
        ...state, 
        comments
      };
    }
      
    case DELETE_COMMENT:{
      const comments = state
        .comments
        .filter(comment => comment.body !== action.payload);

   
      
      return {
        ...state, 
        comments
      };
    }
    default:
      return state;
  }
};

export default reducer;
