import React, { useState, useEffect, Children } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const FadeIn = ({
    delay,
    transitionDuration,
    style,
    className,
    children,
    ...props
}) => {
    const [maxIsVisible, setMaxIsVisible] = useState(0)

    useEffect(() => {
        const count = Children.count(children)
        let i = 0
        let interval = setInterval(() => {
            i++
            if (i > count) clearInterval(interval)

            setMaxIsVisible(i)
        }, delay)

        return () => clearInterval(interval)
    }, [])

    return (
        <div {...props} style={style} className={className}>
            {Children.map(children, (child, i) => {
                return (
                    <div
                        style={{
                            transition: `opacity ${transitionDuration}ms, top ${transitionDuration}ms`,
                            position: 'relative',
                            top: maxIsVisible > i ? 0 : 20,
                            opacity: maxIsVisible > i ? 1 : 0,
                        }}
                    >
                        {child}
                    </div>
                )
            })}
        </div>
    )
}

FadeIn.propTypes = {
    delay: PropTypes.string,
    transitionDuration: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

FadeIn.defaultProps = {
    delay: 50,
    transitionDuration: 400,
}

export default FadeIn
