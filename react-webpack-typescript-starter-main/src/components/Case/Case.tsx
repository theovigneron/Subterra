import React, { useState } from "react"

export interface Props {
    width?: number,
    height?: number,
}

export const Case = ({ width = 50, height = 50}) =>{
    const [show, setShow] = useState(false)
    return ( <div style={{ background: show ? '#FFF' : '#000', height: height, width: width }}></div> 
    )

}
