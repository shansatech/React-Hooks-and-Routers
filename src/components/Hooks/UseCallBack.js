import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const UseCallBack = () => {
    return (
        <div>
            <div style={{
                // background: "yellow",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <Link to='parent-component'>Parent Component</Link>
            </div>
            <Outlet />
        </div>
    )
}