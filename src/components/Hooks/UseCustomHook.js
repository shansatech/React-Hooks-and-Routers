import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const UseCustomHook = () => {
    return (
        <div>
            <div style={{
                // background: "yellow",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <Link to='doc-title'>Doc Title</Link>
                <Link to='doc-title-two'>Doc Title Two</Link>
            </div>
            <Outlet />
        </div>
    )
}