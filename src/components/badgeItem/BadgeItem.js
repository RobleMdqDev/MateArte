import React from 'react'

import { Badge } from 'react-bootstrap';

const BadgeItem = ({color, bkgColor, cantidad})=>{
    
    const style = {
        position: "absolute",
        top: "5px",
        left: "5px",
        width: "fit-content",
        height: "fit-content",
        zIndex: "10000",
        fontSize: "15px",
        backgroundColor: bkgColor,
        color: color   
    }

    return <Badge style={style}>{cantidad}</Badge>
}



export default BadgeItem