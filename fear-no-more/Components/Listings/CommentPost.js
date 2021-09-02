import React, { useState } from 'react';

const CommentPost = ({ post_id, thread_id, email }) => {
  const [info, setInfo] = useState({
    post_id,
    thread_id,
    email,
    body: ''
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const newInfo = info;
    newInfo[body] = value;
    setInfo(newInfo);
  };

  return (
    <div>NEW FORM POST REQUEST</div>
  )
};

export default CommentPost;