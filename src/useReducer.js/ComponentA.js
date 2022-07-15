import React, { useContext } from 'react'
import { CountContext } from './CompGlobal'


function ComponentA() {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentA - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        </div>
    )
}

export default ComponentA