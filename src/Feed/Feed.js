import React from 'react'
import Post from '../Post/Post'
import TweetBox from '../TweetBox/TweetBox'
import "./Feed.css"
const Feed = () => {
    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />


        </div >
    )
}

export default Feed
