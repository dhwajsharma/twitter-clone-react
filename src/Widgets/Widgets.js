import React from 'react';
import "./Widgets.css"
<<<<<<< HEAD
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
=======
>>>>>>> a3252e72656b06c108352e701336cdaf101da42d

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widgets_widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={"933354946111705097"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="joe_jag"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    options={{ text: "#reactjs is awesome", via: "joe_jag" }}
                />
            </div>
        </div>
    )
}

export default Widgets
