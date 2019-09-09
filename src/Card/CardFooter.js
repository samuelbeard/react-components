import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const CardFooter = ({ children, background, color, className, ...props }) => {
    return (
        <div
            {...props}
            className={cn(
                `sb-card-footer`,
                `color-${color}`,
                `bg-${background}`
            )}
        >
            {children}
        </div>
    )
}

CardFooter.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    /** Background color */
    background: PropTypes.string,
    /** Colour of the text */
    color: PropTypes.string,
}

CardFooter.defaultProps = {
    color: 'default',
    background: 'shade',
}

export default CardFooter
