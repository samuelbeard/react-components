import React from 'react'
import cn from 'classnames'

const InputGroup = ({ className, children, ...props }) => {
    return (
        <div {...props} className={cn(`sb-input-group`, className)}>
            {children}
        </div>
    )
}

export default InputGroup
