import React from 'react'
import { action } from '@storybook/addon-actions'

import FadeIn from './index'

export default {
    title: 'FadeIn',

    decorators: [
        storyFn => (
            <div style={{ textAlign: 'center', marginTop: '25px' }}>
                {storyFn()}
            </div>
        ),
    ],
}

export const basic = () => (
    <FadeIn>
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
        <p>Four</p>
        <p>Five</p>
    </FadeIn>
)

basic.story = {
    name: 'Basic',
}

export const delayed = () => (
    <FadeIn delay="3000">
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
        <p>Four</p>
        <p>Five</p>
    </FadeIn>
)

delayed.story = {
    name: 'Delayed',
}

export const transition = () => (
    <FadeIn transitionDuration="3000">
        <p>One</p>
        <p>Two</p>
        <p>Three</p>
        <p>Four</p>
        <p>Five</p>
    </FadeIn>
)

delayed.transition = {
    name: 'Transition Duration',
}
