import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Button = props => {
    return props.to ? (
        <a
            {...props}
            href={props.to}
            className={cn(
                `sb-button`,
                `color-${props.color}`,
                `bg-${props.background}`,
                props.className,
                `pointer`,
                props.block && 'block',
                `size-${props.size}`
            )}
            target={props.newTab && '_blank'}
            style={props.style}
        >
            {props.children}
        </a>
    ) : (
        <button
            {...props}
            onClick={props.onClick}
            className={cn(
                `sb-button`,
                `color-${props.color}`,
                `bg-${props.background}`,
                props.className,
                props.onClick && 'pointer',
                props.block && 'block',
                `size-${props.size}`
            )}
            style={props.style}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    /** Button will be 100% width. */
    block: PropTypes.bool,
    /** Open a new tab on click. Only works with a `to` prop. */
    newTab: PropTypes.bool,
    /** A url or uri that the button will link to. */
    to: PropTypes.string,
    /** Size of the button. Default is default size. */
    size: PropTypes.oneOf(['sm', 'default', 'lg', 'xl']),
    /** Pass a function to the button. */
    onClick: PropTypes.func,
    color: PropTypes.string,
    background: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
}

Button.defaultProps = {
    size: 'default',
    color: 'white',
    background: 'default',
}

export default Button
