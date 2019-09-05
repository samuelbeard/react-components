import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './style.scss'

export const Container = ({ fluid, className, children, ...props }) => (
    <div {...props} className={cn(`grid_container`, fluid && `fluid`, className)}>
        {children}
    </div>
)

Container.displayName = 'Container'

Container.propTypes = {
    /** If true, container will be full width of the viewport. */
    fluid: PropTypes.bool,
    /** Pass className into the div. */
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

Container.defaultProps = {
    fluid: false,
}

export default Container
