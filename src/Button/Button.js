import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Button = ({ onClick, className, background, color, to, newTab, block, size, children, ...props }) => {
    return to ? (
        <a {...props} href={to} className={cn(`sb-button`, `color-${color}`, `bg-${background}`, className, `pointer`, block && 'block', `size-${size}`)} target={newTab && '_blank'}>
            {children}
        </a>
    ) : (
        <button {...props} onClick={onClick} className={cn(`sb-button`, `color-${color}`, `bg-${background}`, className, onClick && 'pointer', block && 'block', `size-${size}`)}>
            {children}
        </button>
    )
}

Button.propTypes = {
    /** Pass a function to the button. */
    onClick: PropTypes.func,
    className: PropTypes.string,
    background: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
    /** A url or uri that the button will link to. */
    to: PropTypes.string,
    /** Open a new tab on click. Only works with a `to` prop. */
    newTab: PropTypes.bool,
    /** Button will be 100% width. */
    block: PropTypes.bool,
    /** Size of the button. Default is default size. */
    size: PropTypes.oneOf(['sm', 'default', 'lg', 'xl'])
}

Button.defaultProps = {
    color: 'white',
    background: 'default',
    size: 'default'
}

export default Button
