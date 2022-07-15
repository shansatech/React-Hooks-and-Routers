import React, { useState } from 'react'

function HookName() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <h1>useState with object</h1>
            <form>
                <input type=''
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })}
                />
                <input type=''
                    value={name.lastName}
                    onChange={e => setName({ ...name, lastName: e.target.value })}
                />
                <h1> Your first name is - {name.firstName}</h1>
                <h1> Your last name is - {name.lastName}</h1>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default HookName