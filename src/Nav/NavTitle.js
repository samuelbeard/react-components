import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const NavTitle = ({ color, children, className, style, ...props }) => {

    return (
        <h1 style={{...style}} {...props} className={cn('sb-nav-title', `color-${color}`, className)}>{children}</h1>
    )
}

NavTitle.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default NavTitle
