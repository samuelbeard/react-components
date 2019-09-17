import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Container } from '../Grid'

const Section = ({
    children,
    className,
    containerClassName,
    fluid,
    background,
    color,
    padding,
    fullHeight,
    style,
    ...props
}) => {
    return (
        <div
            {...props}
            className={cn(
                'sb-section',
                `bg-${background}`,
                `color-${color}`,
                className
            )}
            style={{
                padding: `${padding}px`,
                height: fullHeight ? '100vh' : 'auto',
                ...style,
            }}
        >
            <Container className={cn(containerClassName)} fluid={fluid}>{children}</Container>
        </div>
    )
}

Section.propTypes = {
    /** Height of the section will be 100vh */
    fullHeight: PropTypes.bool,
    className: PropTypes.string,
    /** classes passed to the container */
    containerClassName: PropTypes.string,
    background: PropTypes.string,
    color: PropTypes.string,
    /** Padding at the top and bottom of the section in pixels */
    padding: PropTypes.number,
    /** Style passed in as a prop. */
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
}

Section.defaultProps = {
    padding: 50,
    color: 'white',
    background: 'black',
}

export default Section
