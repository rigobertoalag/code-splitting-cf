import React, { useContext } from 'react'
import { ThemeContext } from './App'

export default ()=>{
    const context = useContext(ThemeContext)
    return(
        <button style={{  backgroundColor: context.backgroundColor, color: context.color }}>click me</button>
    )
} 