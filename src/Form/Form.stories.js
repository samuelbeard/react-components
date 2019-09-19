import React from 'react'

import { Input, Form, InputGroup, Label } from './index'

export default {
    title: 'Form',

    decorators: [
        storyFn => (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '25px',
                }}
            >
                <div style={{ width: '50%' }}>{storyFn()}</div>
            </div>
        ),
    ],
}

export const basic = () => (
    <Form>
        <InputGroup>
            <Label>Text Input</Label>
            <Input type="text" value="Text" />
        </InputGroup>
    </Form>
)

export const types = () => (
    <Form>
        <InputGroup>
            <Label>Email Input</Label>
            <Input type="email" value="Email" />
        </InputGroup>
        <InputGroup>
            <Label>Password Input</Label>
            <Input type="password" value="Password" />
        </InputGroup>
        <InputGroup>
            <Label>Select</Label>
            <Input type="select" />
        </InputGroup>
        <InputGroup>
            <Label>Text Area Input</Label>
            <Input type="textarea" value="Text Area" />
        </InputGroup>
    </Form>
)

export const statuses = () => (
    <Form>
        <InputGroup>
            <Label color="green">Green Input</Label>
            <Input type="text" value="border='green'" border="green" />
        </InputGroup>
        <InputGroup>
            <Label color="red">Red Input</Label>
            <Input type="text" value="border='red'" border="red" />
        </InputGroup>
    </Form>
)

export const disabled = () => (
    <Form>
        <InputGroup>
            <Label disabled>Disabled</Label>
            <Input value="Disabled" disabled />
        </InputGroup>
    </Form>
)
