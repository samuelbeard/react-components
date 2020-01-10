import React from 'react'
import { action } from '@storybook/addon-actions'

import Button from './index'

export default {
    title: 'Button',

    decorators: [
        storyFn => (
            <div style={{ textAlign: 'center', marginTop: '25px' }}>
                {storyFn()}
            </div>
        ),
    ],
}

export const basic = () => <Button>Button</Button>

basic.story = {
    name: 'Basic',
}

export const colours = () => <Button background="blue">Coloured Button</Button>

colours.story = {
    name: 'Colours',
}

export const sizes = () => (
    <>
        <Button className="m-r-5" size="sm">
            Small Button
        </Button>
        <Button className="m-r-5">Normal Button</Button>
        <Button className="m-r-5" size="lg">
            Large Button
        </Button>
        <Button className="m-r-5" size="xl">
            Extra Large Button
        </Button>
    </>
)

sizes.story = {
    name: 'Sizes',
}

export const block = () => <Button block>Block Button</Button>

block.story = {
    name: 'Block',
}

export const onClick = () => (
    <Button onClick={action('Clicked')}>Do Something!</Button>
)

export const link = () => <Button to="#">An Anchor Button</Button>

link.story = {
    name: 'Link',
}

export const crazy = () => (
    <>
        <Button
            style={{
                borderRadius: '40% 10% 50% / 10% 100%',
                marginRight: '30px',
            }}
            color="green"
            size="lg"
            background="blue"
        >
            Button
        </Button>
        <Button
            style={{ borderRadius: '100%', border: '3px solid red' }}
            color="red"
            size="lg"
            background="orange"
        >
            Button
        </Button>
    </>
)

crazy.story = {
    name: 'Crazy!',
}
