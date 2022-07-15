import React, { useContext } from 'react'
import { MentorContext, UserContext } from './CompC'

function CompF() {

    const user = useContext(UserContext)
    const channel = useContext(MentorContext)

    return (
        <div>
            {user} - {channel}
            {/* <UserContext.Consumer>
                {
                    user => {
                        return (
                            <MentorContext.Consumer>
                                {mentor => {
                                    return (
                                        <div>User context value from {user}, Mentor context value from {mentor}</div>
                                    )
                                }}
                            </MentorContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer> */}
        </div>
    )
}

export default CompF