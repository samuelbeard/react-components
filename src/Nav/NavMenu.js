import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const NavMenu = ({ items, color, className, style, ...props }) => {
    return (
        <div
            style={{ ...style }}
            {...props}
            className={cn('sb-nav-menu', `color-${color}`, className)}
        >
            {items.map((el, i) => (
                <span key={i}>{el}</span>
            ))}
        </div>
    )
}

NavMenu.propTypes = {
    items: PropTypes.array.isRequired,
    color: PropTypes.string,
}

export default NavMenu
