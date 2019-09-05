import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Countdown = ({ date, d, h, m, s, style, className, daysText, hoursText, minutesText, secondsText }) => {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [days, setDays] = useState(0)
    const [distance, setDistance] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            let now = new Date().getTime()
            setDistance(date - now)
        }, 10)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
    }, [distance])

    return (
        <span className={cn('sb-countdown', className)} style={style}>
            <span className='sb-countdown-days'>{d && days + ' ' + daysText}</span> <span className='sb-countdown-hours'>{h && hours + ' ' + hoursText}</span> <span className='sb-countdown-minutes'>{m && minutes + ' ' + minutesText}</span> <span className='sb-countdown-seconds'>{s && seconds + ' ' + secondsText}</span>
        </span>
    )
}

Countdown.propTypes = {
    date: PropTypes.any,
    d: PropTypes.bool,
    h: PropTypes.bool,
    m: PropTypes.bool,
    s: PropTypes.bool,
    daysText: PropTypes.string,
    hoursText: PropTypes.string,
    minutesText: PropTypes.string,
    secondsText: PropTypes.string,
}

Countdown.defaultProps = {
    date: new Date('Jan 5, 2021 15:37:25').getTime(),
    d: false,
    h: false,
    m: false,
    s: false,
    daysText: 'Days',
    hoursText: 'Hours',
    minutesText: 'Minutes',
    secondsText: 'Seconds',
}

export default Countdown
