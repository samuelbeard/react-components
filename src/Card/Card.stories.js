import React from 'react'

import { storiesOf } from '@storybook/react'

import { Card, CardBody, CardHeader, CardFooter } from './index'

storiesOf('Card', module).add('Basic', () => (
    <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Hello there everyone. This is the card body.</CardBody>
        <CardFooter>Footer</CardFooter>
    </Card>
))
