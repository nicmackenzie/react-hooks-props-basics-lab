import React from 'react';
import Links from './Links';

function About(props) {
  console.log(props.links.github);
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio !== '' && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
