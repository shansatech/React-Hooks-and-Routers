import React, { useState } from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <h1>useEffect with cleanup</h1>
            <button onClick={() => setDisplay(!display)}>Toggle Button</button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseContainer