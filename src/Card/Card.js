import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Card = ({ children, background, color, className, ...props }) => {
    return (
        <div
            {...props}
            className={cn(`sb-card`, `color-${color}`, `bg-${background}`, className)}
        >
            {children}
        </div>
    )
}

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    /** Background color */
    background: PropTypes.string,
    /** Colour of the text */
    color: PropTypes.string,
}

Card.defaultProps = {
    color: 'default',
    background: 'white'
}

export default Card
