import React, { useContext } from 'react'
import { CountContext } from './CompGlobal'


function ComponentF() {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentF - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        </div>
    )
}

export default ComponentF