import React from 'react'

import Countdown from './index'

export default {
    title: 'Countdown',

    decorators: [
        storyFn => (
            <div style={{ textAlign: 'center', marginTop: '25px' }}>
                {storyFn()}
            </div>
        ),
    ],
}

export const basic = () => (
    <>
        <Countdown d h m s date={new Date('2022/09/04 17:00').getTime()} />
    </>
)

basic.story = {
    name: 'Basic',
}

export const styled = () => (
    <Countdown
        d
        date={new Date('2020/09/04 17:00').getTime()}
        style={{ fontSize: '30px' }}
    />
)

styled.story = {
    name: 'Styled',
}

export const customLabel = () => (
    <Countdown
        d
        daysText="ddaaayyss"
        date={new Date('2020/09/04 17:00').getTime()}
    />
)

customLabel.story = {
    name: 'Custom Label',
}
