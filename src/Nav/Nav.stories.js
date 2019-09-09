import React from 'react'

import { storiesOf } from '@storybook/react'

import { Nav, NavTitle, NavMenu } from './index'

storiesOf('Nav', module)
    .add(
        'Default',
        () => (
            <Nav>
                <NavTitle>Default Nav</NavTitle>
                <NavMenu items={[<a href='#'>Item One</a>, <a href='#'>Item Two</a>]} />
            </Nav>
        ),
        {
            info: 'Pass an array of JSX elements to the NavMenu. This is so you can use react-router or anything else in the nav bar.',
        }
    )
    .add('Styling', () => (
        <>
            <Nav background='red' color='orange'>
                <NavTitle>Cool Nav</NavTitle>
                <NavMenu items={[<a href='#'>Item One</a>, <a href='#'>Item Two</a>]} />
            </Nav>
            <br />
            <br />
            <Nav background='purple'>
                <NavTitle>Another Cool Nav</NavTitle>
                <NavMenu color="red" items={[<a href='#'>Item One</a>, <a href='#'>Item Two</a>]} />
            </Nav>
        </>
    ))
