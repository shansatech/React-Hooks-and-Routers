import React, { useState, useEffect } from 'react'

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        console.log(count + 1)
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <h2>useEffect with incorrect dependency</h2>
            <h1>{count}</h1>
        </div>
    )
}

export default IntervalHookCounter