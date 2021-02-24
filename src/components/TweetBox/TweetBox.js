import React, { useState } from 'react'
import { Avatar, Button } from "@material-ui/core";
import "./TweetBox.css";
import db from "../firebase/firebase";

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Dhwaj Sharma",
            username: "dhwajsharmaa",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://instagram.fjai2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/152469504_269343477902723_4415660490767143387_n.jpg?_nc_ht=instagram.fjai2-2.fna.fbcdn.net&_nc_ohc=CmSlrK46DwAAX-EPWZ4&tp=1&oh=899b49918592a00e50af07e329cb85f5&oe=60605109"
        });

        setTweetMessage("");
        setTweetImage("");

    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://instagram.fjai2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/152469504_269343477902723_4415660490767143387_n.jpg?_nc_ht=instagram.fjai2-2.fna.fbcdn.net&_nc_ohc=CmSlrK46DwAAX-EPWZ4&tp=1&oh=899b49918592a00e50af07e329cb85f5&oe=60605109" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        type="text"
                        placeholder="What's happening?" />
                </div>
                <input
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage}
                    className="tweetBox_imageInput"
                    type="text"
                    placeholder="Enter image URL" />

                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
