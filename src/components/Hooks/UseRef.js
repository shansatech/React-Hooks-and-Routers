import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const UseRef = () => {
    return (
        <div>
            <div style={{
                // background: "yellow",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <Link to='focus-input'>Focus Input</Link>
                <Link to='class-timer'>Class Timer</Link>
                <Link to='hook-timer'>Hook Timer</Link>
            </div>
            <Outlet />
        </div>
    )
}