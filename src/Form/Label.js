import React from 'react'
import cn from 'classnames'

const Label = ({ color, disabled, className, children, ...props }) => {

    return (
        <label {...props} className={cn(`sb-label`, `color-${color}`, disabled && `sb-disabled`, className)}>{children}</label>
    )
}

export default Label
