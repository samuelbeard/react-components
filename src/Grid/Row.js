import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

export const Row = ({ className, children, ...props }) => (
    <div className={cn(
        `row`,
        className
        )} {...props}>
        {children}
    </div>
)

Row.propTypes = {
    /** Pass className into the div. */
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}
Row.defaultProps = {}

export default Row
