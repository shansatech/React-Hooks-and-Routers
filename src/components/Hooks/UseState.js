import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const UseState = () => {
    return (
        <div>
            <div style={{
                // background: "yellow",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <Link to='class-counter'>Class Counter</Link>
                <Link to='hook-counter'>Hook Counter</Link>
                <Link to='hook-hover'>Hook Hover</Link>
                <Link to='hook-name'>Hook Name</Link>
                <Link to='hook-number-list'>Hook Number List</Link>
            </div>
            <Outlet />
        </div>
    )
}
