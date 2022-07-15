import React, { useState } from 'react'
import useDocumentTitle from '../components/CustomHook/useDocumentTitle'

function DocTitle2() {

    const [count, setCount] = useState(0)

    useDocumentTitle(count)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count - {count}</button>
        </div>
    )
}

export default DocTitle2