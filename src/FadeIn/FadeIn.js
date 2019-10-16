import React, { useState, useEffect, Children } from 'react'

const FadeIn = ({ delay, transitionDuration, style, className, children }) => {
    const [maxIsVisible, setMaxIsVisible] = useState(0)

    useEffect(() => {
        const count = Children.count(children)
        let i = 0
        let interval = setInterval(() => {
            i++
            if (i > count) clearInterval(interval)

            setMaxIsVisible(i)
        }, delay || 50)

        return () => clearInterval(interval)
    }, [])

    return (
        <div style={style} className={className}>
            {Children.map(children, (child, i) => {
                return (
                    <div
                        style={{
                            transition: `opacity ${transitionDuration || 400}ms, top ${transitionDuration || 400}ms`,
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

export default FadeIn
