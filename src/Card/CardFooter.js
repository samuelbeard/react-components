import React from 'react'

const CardFooter = ({ children, background, color }) => {

    return (
        <div className='sb-card-footer' style={{
            backgroundColor: background ? background : '#f7f7f7',
            color: color ? color : '#333333'
        }}>{ children }</div>
    )
}

export default CardFooter
