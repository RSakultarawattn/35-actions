import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';


const initialState = {
  comments: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      return {
        ...state, 
        comments: state.comments.map((comment, i) => {
          if(i === action.payload.index) return action.payload.comment;
          return comment;        
        }) };
    case DELETE_COMMENT:
      return {
        ...state, 
        comments: state.comments.filter(
          (comment) => comment.title !== action.payload
        )
      };
      
    default:
      return state;
  }
}
