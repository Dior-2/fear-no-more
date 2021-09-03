import React from 'react';

const DisplayComment = ({ comment }) => {
  const noComment = () => <div>Waiting on a reply</div>;

  return (
    <>
      {
        <div style={{ backgroundColor: 'grey' }}>
          <div>@{ comment.username }</div>
          <div>{ comment.body }</div>
          <div>{ Date(comment.date) }</div>
          <div>{ comment.post_id }</div>
          <div>{ comment.thread_id }</div>
        </div>
      }
    </>
  )
};

export default DisplayComment;