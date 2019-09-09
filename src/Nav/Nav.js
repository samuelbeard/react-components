import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container } from '../Grid'

const Nav = ({ children, background, color, className, style, ...props }) => {
    return (
        <div style={{...style}} {...props} className={cn(`sb-nav`, `color-${color}`, `bg-${background}`, className)}>
            <Container>{children}</Container>
        </div>
    )
}

Nav.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    /** Background color */
    background: PropTypes.string,
    /** Colour of the text */
    color: PropTypes.string,
}

Nav.defaultProps = {
    color: 'white',
    background: 'blue',
}

export default Nav
