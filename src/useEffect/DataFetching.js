import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromBtnClick, setIdFromBtnClick] = useState(1)

    const handleClick = () => {
        setIdFromBtnClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [idFromBtnClick])

    return (
        <div>
            <h1>Fetching data with useEffect</h1>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default DataFetching