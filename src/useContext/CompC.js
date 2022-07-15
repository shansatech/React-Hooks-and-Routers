import React from 'react'
import CompE from './CompE'

export const UserContext = React.createContext()
export const MentorContext = React.createContext()

function CompC() {

    return (
        <div>
            <UserContext.Provider value={'Satheesh'}>
                <MentorContext.Provider value={'Karthick'}>
                    <CompE />
                </MentorContext.Provider>
            </UserContext.Provider></div>
    )
}

export default CompC