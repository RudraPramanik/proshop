import React from 'react'
import {Alert} from 'react-bootstrap'


const Massage = ({ varient, children }) => {
    return (
        <Alert variant={varient}>
            {children}
        </Alert>
    )
}

Massage.defaultProps = {
    variant : 'info'
}

export default Massage
