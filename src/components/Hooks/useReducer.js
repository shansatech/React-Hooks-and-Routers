import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const UseReducer = () => {
    return (
        <div>
            <div style={{
                // background: "yellow",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <Link to='counter'>Counter</Link>
                <Link to='first-counter'>First Counter</Link>
                <Link to='second-counter'>Second Counter</Link>
                <Link to='comp-global'>Global State</Link>
                <Link to='fetch-data'>Fetch Data</Link>
                <Link to='fetch-data-two'>Fetch Data Two</Link>
            </div>
            <Outlet />
        </div>
    )
}
