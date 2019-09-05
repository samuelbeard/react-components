import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './style.scss'

export const Row = ({ className, children, ...props }) => (
    <div className={cn(
        `row`,
        className
        )} {...props}>
        {children}
    </div>
)

Row.displayName = 'Row'

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}
Row.defaultProps = {}

export default Row
