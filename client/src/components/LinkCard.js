import React from 'react';

const LinkCard = ({link}) => {
  return (
    <>
      <h2>Link</h2>
      <p>Short: <a target="_blank" rel="noopener noreferrer" href={link.to}>{link.to}</a></p>
      <p>From: <a target="_blank" rel="noopener noreferrer" href={link.from}>{link.from}</a></p>
      <p>Click Count: <strong>{link.clicks}</strong></p>
      <p>Date: <strong>{new Date(link.date).toLocaleString('ru')}</strong></p>
    </>
  );
};

export default LinkCard;
