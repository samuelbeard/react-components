import React from 'react'

import { storiesOf } from '@storybook/react'

import { Card, CardBody, CardHeader, CardFooter } from './index'

storiesOf('Card', module)
    .addDecorator(storyFn => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '50%' }}>{storyFn()}</div>
        </div>
    ))
    .add('Basic', () => (
        <>
            <br />
            <br />
            <Card>
                <CardHeader>Card Header</CardHeader>
                <CardBody>This is the card body.</CardBody>
                <CardFooter>Card Footer</CardFooter>
            </Card>
            <br />
            <br />
            <Card>
                <CardBody>This is a card with no header or footer.</CardBody>
            </Card>
            <br />
            <br />
            <Card>
                <CardHeader>Header</CardHeader>
                <CardBody>
                    <h2>A Heading</h2>
                    <p>This card has an h2 and p tag inside the card body.</p>
                </CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
            <br />
            <br />
            <Card>
                <CardHeader>Header</CardHeader>
                <CardBody>Hello there everyone. This is the card with only a header and body.</CardBody>
            </Card>
            <br />
            <br />
            <Card>
                <CardBody>Hello there everyone. This is a card with only a footer and body.</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
        </>
    ))
    .add('Colours', () => (
        <>
            <Card background='#97efff'>
                <CardHeader>Header</CardHeader>
                <CardBody>This card has a background colour of #97efff.</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
            <br />
            <br />
            <Card background='#333333' color='#ffffff'>
                <CardBody>This card has a dark background color and a white font. It's only in the body though.</CardBody>
            </Card>
            <br />
            <br />
            <Card background='#333333' color='#ffffff'>
                <CardHeader>Header</CardHeader>
                <CardBody>Headers and footers stay the same.</CardBody>
                <CardFooter>Footer</CardFooter>
            </Card>
            <br />
            <br />
            <Card>
                <CardHeader background='red' color='white'>
                    Header
                </CardHeader>
                <CardBody>You can even colour the header and footer.</CardBody>
                <CardFooter background='blue' color='white'>
                    Footer
                </CardFooter>
            </Card>
        </>
    ))
