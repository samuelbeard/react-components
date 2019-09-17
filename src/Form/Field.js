import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Field = ({ className, color, type, border, ...props }) => {
    switch (type) {
        case 'select':
            return (
                <Select
                    className={cn(
                        `sb-field`,
                        `color-${color}`,
                        `border-${border}`,
                        className
                    )}
                />
            )
        case 'textarea':
            return (
                <TextArea
                    className={cn(
                        `sb-field`,
                        `color-${color}`,
                        `border-${border}`,
                        className
                    )}
                />
            )
        default:
            return (
                <input
                    {...props}
                    className={cn(
                        `sb-field`,
                        `color-${color}`,
                        `border-${border}`,
                        className
                    )}
                    type={type}
                />
            )
    }
}

Field.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    border: PropTypes.string,
    type: PropTypes.oneOf(['text', 'textarea', 'select', 'email', 'password']),
}

Field.defaultProps = {
    color: 'black',
    border: 'shade',
}

export default Field

/**
 * To Do
 * - Add icon prop that adds an icon to the end of the field
 * - Add a border prop to change the border on validations
 */

const Select = ({ className, ...props }) => {
    return (
        <select {...props} className={className}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select>
    )
}

const TextArea = ({ className }) => {
    return <textarea className={className} />
}
