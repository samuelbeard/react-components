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
    /** Background color */
    background: PropTypes.string,
    /** Colour of the text */
    color: PropTypes.string,
}

Card.defaultProps = {
    background: '#ffffff'
}

export default Card
