import React, { useState } from 'react'


function HookHover() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>useState with previous state</h1>
            <p>Count change based on mouse hover on count</p>
            <h1 onMouseOver={() => setCount(count + 1)}>Count {count}</h1>
        </div>

    )
}

export default HookHover