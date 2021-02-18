import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createComments } from '../../../actions/commentActions';

const Comment = ({ index }) => {
  const dispatch = useDispatch();
    

  const handleClick = () => {
    dispatch(deleteComment(index, comment));
  };

  return (
      <>

      <dl>
          <dt>Comment</dt>
          <dd>{index}</dd>
      </dl>
  )
};
