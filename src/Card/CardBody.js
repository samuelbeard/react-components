import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const CardBody = ({ className, children }) => {

    return (
        <div className={cn(`sb-card-body`, className)}>{ children }</div>
    )
}

CardBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default CardBody
