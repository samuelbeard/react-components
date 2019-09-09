import React from 'react'

import { storiesOf } from '@storybook/react'

import Countdown from './index'

storiesOf('Countdown', module)
    .addDecorator(storyFn => (
        <div style={{ textAlign: 'center', marginTop: '25px' }}>
            {storyFn()}
        </div>
    ))
    .add('Basic', () => (
        <>
            <Countdown d h m s date={new Date('2022/09/04 17:00').getTime()} />
        </>
    ))
    .add('Styled', () => (
        <Countdown
            d
            date={new Date('2020/09/04 17:00').getTime()}
            style={{ fontSize: '30px' }}
        />
    ))
    .add('Custom Label', () => (
        <Countdown
            d
            daysText="ddaaayyss"
            date={new Date('2020/09/04 17:00').getTime()}
        />
    ))
