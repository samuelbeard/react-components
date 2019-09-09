import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const CardHeader = ({ children, background, color, className, ...props }) => {
    return (
        <div
            {...props}
            className={cn(
                `sb-card-header`,
                `color-${color}`,
                `bg-${background}`
            )}
        >
            {children}
        </div>
    )
}

CardHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    /** Background color */
    background: PropTypes.string,
    /** Colour of the text */
    color: PropTypes.string,
}

CardHeader.defaultProps = {
    color: 'default',
    background: 'shade',
}

export default CardHeader
