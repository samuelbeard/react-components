import React from 'react'
import { action } from '@storybook/addon-actions'

import { storiesOf } from '@storybook/react'

import Button from './index'

storiesOf('Button', module)
    .addDecorator(storyFn => <div style={{ textAlign: 'center', marginTop: '25px' }}>{storyFn()}</div>)
    .add('Basic', () => (
        <>
            <Button>Button</Button>
            <br />
            <br />
            <Button className='m-r-5' background='blue'>
                Blue Button
            </Button>
            <Button className='m-r-5' color='black' background='green'>
                Green Button
            </Button>
            <Button className='m-r-5' background='red'>
                Red Button
            </Button>
            <Button className='m-r-5' background='orange'>
                Orange Button
            </Button>
            <Button className='m-r-5' color='black' background='yellow'>
                Yellow Button
            </Button>
            <Button className='m-r-5' background='purple'>
                Purple Button
            </Button>
        </>
    ))
    .add('Sizes', () => (
        <>
            <Button className='m-r-5' size='sm'>
                Small Button
            </Button>
            <Button className='m-r-5'>Normal Button</Button>
            <Button className='m-r-5' size='lg'>
                Large Button
            </Button>
            <Button className='m-r-5' size='xl'>
                Extra Large Button
            </Button>
        </>
    ))
    .add('Block', () => <Button block>Block Button</Button>)
    .add('onClick', () => <Button onClick={action('Clicked')}>Do Something!</Button>)
    .add('Link', () => <Button to='#'>An Anchor Button</Button>)
    .add('Crazy!', () => (
        <>
            <Button style={{borderRadius: '40% 10% 50% / 10% 100%', marginRight: '30px'}} color='green' size='lg' background='blue'>
                Button
            </Button>
            <Button style={{borderRadius: '100%', border: '3px solid red'}} color='red' size='lg' background='orange'>
                Button
            </Button>
        </>
    ))
