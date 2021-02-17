import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from
import { deletePost } from '../../../actions/postActions';

const Post = ({ title, body }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deletePost(title));
    };

    return (
        <>
        <dl>
            <dt>Title</dt>
            <dd>{title}</dd>

            <dt>Body</dt>
            <db>{body}</db>
        </dl>
        <button onClick={handleClick}>Delete</button>
        </>
    );
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default Post;