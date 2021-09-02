import React from 'react';

const Comment = ({ comment }) => {
  // console.log('comment', comment);
  const noComment = () => <div>Waiting on a reply</div>;

  return (
    <>
      {
        <div style={{ backgroundColor: 'red' }}>
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

export default Comment;