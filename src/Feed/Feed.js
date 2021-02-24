import React, { useState, useEffect } from 'react'
import Post from '../Post/Post'
import TweetBox from '../TweetBox/TweetBox'
import "./Feed.css"
import db from "../firebase/firebase";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])


    return (
        <div className="feed">
            <div className="feed_header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            {posts.map(post => (
                <Post
                    displayName={post.displayName}
                    userName={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
        </div >
    )
}

export default Feed
