import React from 'react';
import PropTypes from 'prop-types';

import Comments from './Comments';

export default function CommentList({ comments }) {
  return (
    <ul>
      {
        comments.map((comments, i) => {
          return (
            <li key={i}>
              <Comments {...comments}/>
            </li>
          );
        })
      }
    </ul>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired
  }))
};
