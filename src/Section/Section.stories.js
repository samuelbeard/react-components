import React from 'react'

import { storiesOf } from '@storybook/react'

import { Section } from './index'
import { Row, Col } from '../Grid'

storiesOf('Section', module)
    .addDecorator(storyFn => <div style={{ textAlign: 'center', marginTop: '25px' }}>{storyFn()}</div>)
    .add('Basic', () => (
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
    ))
    .add('Full Height', () => (
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
    ))
    .add('Styling', () => (
        <Section background='red' color='orange'>
            <Row>
                <Col>
                    <h1>Styled Section</h1>
                </Col>
            </Row>
        </Section>
    ))
    .add('Multiple', () => (
        <>
            <Section background='blue' color='green'>
                <Row>
                    <Col>
                        <h1>First Section</h1>
                    </Col>
                </Row>
            </Section>
            <Section background='red' color='orange'>
                <Row>
                    <Col>
                        <h1>Second Section</h1>
                    </Col>
                </Row>
            </Section>
        </>
    ))
