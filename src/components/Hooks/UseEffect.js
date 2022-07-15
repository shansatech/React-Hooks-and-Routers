import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const UseEffect = () => {
    return (
        <div>
            <div style={{
                // background: "yellow",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center"
            }}>
                <Link to='class-count'>Class Count</Link>
                <Link to='hook-count'>Hook Count</Link>
                <Link to='class-count2'>Class Count 2</Link>
                <Link to='hook-count2'>Hook Count 2</Link>
                <Link to='class-mouse'>Class Mouse</Link>
                <Link to='hook-mouse'>Hook Mouse</Link>
                <Link to='mouse-container'>Mouse Container</Link>
                <Link to='interval-class-count'>Interval Class Count</Link>
                <Link to='interval-hook-count'>Interval Hook Count</Link>
                <Link to='data-fetching'>Data Fetching</Link>
            </div>
            <Outlet />
        </div>
    )
}
