import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const UseContext = () => {
    return (
        <div>
            <div style={{
                // background: "yellow",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <Link to='comp-c'>CompC</Link>
            </div>
            <Outlet />
        </div>
    )
}
