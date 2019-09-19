import React from 'react';

import { Nav, NavTitle, NavMenu } from './index';

export default {
  title: 'Nav',
};

export const defaultStory = () => (
  <Nav>
    <NavTitle>Default Nav</NavTitle>
    <NavMenu items={[<a href="#">Item One</a>, <a href="#">Item Two</a>]} />
  </Nav>
);

defaultStory.story = {
  name: 'Default',

  parameters: {
    info:
      'Pass an array of JSX elements to the NavMenu. This is so you can use react-router or anything else in the nav bar.',
  },
};

export const styling = () => (
  <>
    <Nav background="red" color="orange">
      <NavTitle>Cool Nav</NavTitle>
      <NavMenu items={[<a href="#">Item One</a>, <a href="#">Item Two</a>]} />
    </Nav>
    <br />
    <br />
    <Nav background="purple">
      <NavTitle>Another Cool Nav</NavTitle>
      <NavMenu color="red" items={[<a href="#">Item One</a>, <a href="#">Item Two</a>]} />
    </Nav>
  </>
);

styling.story = {
  name: 'Styling',
};
