import React from 'react'
import { action } from '@storybook/addon-actions'

import { storiesOf } from '@storybook/react'

import { Field, Form } from './index'

storiesOf('Form', module)
    .addDecorator(storyFn => (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '25px',
            }}
        >
            <div style={{ width: '50%' }}>{storyFn()}</div>
        </div>
    ))
    .add('Basic', () => (
        <Form>
            <Field type="text" value="Text" />
            <br />
            <br />
            <Field type="email" value="Email" />
            <br />
            <br />
            <Field type="password" value="Password" />
            <br />
            <br />
            <Field type="select" />
            <br />
            <br />
            <Field type="textarea" value="Text Area" />
            <br />
            <br />
        </Form>
    ))
    .add('Statuses', () => (
        <Form>
            <Field type="text" value="border='green'" border="green" />
            <br />
            <br />
            <Field type="text" value="border='red'" border="red" />
        </Form>
    ))
