import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const UseMemo = () => {
    return (
        <div>
            <div style={{
                // background: "yellow",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <Link to='Add-count'>Add Counter</Link>
            </div>
            <Outlet />
        </div>
    )
}