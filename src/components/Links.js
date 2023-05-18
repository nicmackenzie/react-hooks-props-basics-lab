import React from 'react';

function Links(props) {
  return (
    <>
      <h3>Links</h3>
      <a href={props.github}>Github</a>
      <a href={props.linkedin}>LinkedIn</a>
    </>
  );
}

export default Links;
