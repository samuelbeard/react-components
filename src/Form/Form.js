import React from 'react'
import cn from 'classnames'

const Form = ({ children, className, ...props }) => {

    return (
        <form {...props} className={cn(`sb-form`)}>
{children}
        </form>
    )
}

export default Form
