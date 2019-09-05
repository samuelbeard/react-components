import React from 'react'

const CardHeader = ({ children, background, color }) => {
    return (
        <div className='sb-card-header' style={{
            backgroundColor: background ? background : '#f7f7f7',
            color: color ? color : '#333333'
        }}>
            {children}
        </div>
    )
}

export default CardHeader
