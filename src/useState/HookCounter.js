import React, { useState } from 'react'

function HookCounter() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    return (
        <div>
            Count: {count}
            <h1>Click counter using useState</h1>
            <p>Click counter using useState Hooks in functional component</p>
            <button onClick={() => setCount(initialCount)}>Reset </button>
            <button onClick={() => setCount(count + 1)}>Increment </button>
            <button onClick={() => setCount(count - 1)}>Decrement </button>
        </div>
    )
}

export default HookCounter