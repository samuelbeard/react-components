import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container } from '../Grid'

const Nav = ({
    children,
    background,
    color,
    className,
    fluid,
    style,
    ...props
}) => {
    return (
        <div
            style={{ ...style }}
            {...props}
            className={cn(
                `sb-nav`,
                `color-${color}`,
                `bg-${background}`,
                className
            )}
        >
            <Container fluid={fluid}>{children}</Container>
        </div>
    )
}

Nav.propTypes = {
    /** Makes the container fluid */
    fluid: PropTypes.bool,
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
