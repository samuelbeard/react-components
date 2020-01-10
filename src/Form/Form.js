import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Form = ({ color, className, style, children, ...props }) => {
    return (
        <form
            {...props}
            style={style}
            className={cn(`sb-form`, `color-${color}`, className)}
        >
            {children}
        </form>
    )
}

Form.propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
}

Form.defaultProps = {
    color: 'default',
}

export default Form
