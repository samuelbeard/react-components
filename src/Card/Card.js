import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const Card = ({ children, background, color }) => {
    return (
        <div
            className='sb-card'
            style={{
                backgroundColor: background ? background : '#ffffff',
                color: color ? color : 'inherit',
            }}
        >
            {children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    background: PropTypes.string,
    color: PropTypes.string,
}

export default Card
