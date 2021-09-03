import React from 'react';

const DisplayComment = ({ comment }) => {
  const noComment = () => <div>Waiting on a reply</div>;

  return (
    <>
      {
        <div style={{
          backgroundColor: '#4b61c8',
          color: 'white',
          width: '680px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          justifyContent: 'flex-start',
          padding: '25px',
          borderRadius: '3px' }}>
          <div style={{ marginBottom: '20px', fontSize: '12px' }}>@{ comment.username }</div>
          <div style={{ marginBottom: '25px', fontSize: '20px' }}>{ comment.body }</div>
          <div style={{ fontSize: '13px' }}>{ Date(comment.date).split(' ').splice(0, 4).join(' ') }</div>
        </div>
      }
    </>
  )
};

export default DisplayComment;