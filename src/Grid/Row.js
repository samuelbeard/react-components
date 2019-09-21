import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

export const Row = ({ background, className, children, ...props }) => (
    <div className={cn(`sb-row`, `bg-${background}`, className)} {...props}>
        {children}
    </div>
)

Row.propTypes = {
    background: PropTypes.string,
    /** Pass className into the div. */
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}
Row.defaultProps = {}

export default Row
