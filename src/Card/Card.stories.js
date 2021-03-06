import React from 'react'

import { Card, CardBody, CardHeader, CardFooter } from '../index'
import { Container, Row, Col } from '../Grid'

export default {
    title: 'Card',

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
            <CardBody>
                Hello there everyone. This is the card with only a header and
                body.
            </CardBody>
        </Card>
        <br />
        <br />
        <Card>
            <CardBody>
                Hello there everyone. This is a card with only a footer and
                body.
            </CardBody>
            <CardFooter>Footer</CardFooter>
        </Card>
    </>
)

basic.story = {
    name: 'Basic',
}

export const colours = () => (
    <>
        <Card background="blue" color="white">
            <CardHeader>Header</CardHeader>
            <CardBody>This card has a blue background.</CardBody>
            <CardFooter>Footer</CardFooter>
        </Card>
        <br />
        <br />
        <Card background="black" color="white">
            <CardBody>
                This card has a dark background color and a white font. It's
                only in the body though.
            </CardBody>
        </Card>
        <br />
        <br />
        <Card background="black" color="white">
            <CardHeader>Header</CardHeader>
            <CardBody>Headers and footers stay the same.</CardBody>
            <CardFooter>Footer</CardFooter>
        </Card>
        <br />
        <br />
        <Card>
            <CardHeader background="red" color="white">
                Header
            </CardHeader>
            <CardBody>You can even colour the header and footer.</CardBody>
            <CardFooter background="blue" color="white">
                Footer
            </CardFooter>
        </Card>
    </>
)

colours.story = {
    name: 'Colours',
}

export const grid = () => (
    <Container>
        <Row>
            <Col>
                <Card background="red">
                    <CardBody>This is the card body.</CardBody>
                </Card>
            </Col>
            <Col>
                <Card background="green">
                    <CardBody>This is the card body.</CardBody>
                </Card>
            </Col>
            <Col>
                <Card background="blue">
                    <CardBody>This is the card body.</CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
)

grid.story = {
    name: 'Grid',
}
