import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Card = props => {
    return (
        <div
            {...props}
            className={cn(
                `sb-card`,
                `color-${props.color}`,
                `bg-${props.background}`,
                props.className
            )}
        >
            {props.children}
        </div>
    )
}

Card.propTypes = {
    color: PropTypes.string,
    background: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

Card.defaultProps = {
    color: 'default',
    background: 'white',
}

export default Card
