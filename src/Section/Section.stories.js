import React from 'react';

import Section from './index';
import { Row, Col } from '../Grid';

export default {
  title: 'Section',

  decorators: [
    storyFn => <div style={{ textAlign: 'center', marginTop: '25px' }}>{storyFn()}</div>,
  ],
};

export const basic = () => (
  <Section>
    <Row>
      <Col>
        <h1>Section</h1>
      </Col>
      <Col>
        <p>Can be used as a hero unit or a section of a page with a separate background color.</p>
      </Col>
    </Row>
  </Section>
);

basic.story = {
  name: 'Basic',
};

export const fullHeight = () => (
  <Section
    fullHeight
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Row>
      <Col>
        <h1>Full Height Section</h1>
      </Col>
      <Col>
        <p>Can be used as a hero unit or a section of a page with a separate background color.</p>
      </Col>
    </Row>
  </Section>
);

fullHeight.story = {
  name: 'Full Height',
};

export const styling = () => (
  <Section background="red" color="orange">
    <Row>
      <Col>
        <h1>Styled Section</h1>
      </Col>
    </Row>
  </Section>
);

styling.story = {
  name: 'Styling',
};

export const multiple = () => (
  <>
    <Section background="blue" color="green">
      <Row>
        <Col>
          <h1>First Section</h1>
        </Col>
      </Row>
    </Section>
    <Section background="red" color="orange">
      <Row>
        <Col>
          <h1>Second Section</h1>
        </Col>
      </Row>
    </Section>
  </>
);

multiple.story = {
  name: 'Multiple',
};
