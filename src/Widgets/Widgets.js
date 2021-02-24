import React from 'react';
import "./Widgets.css"
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input type="text" placeholder="Search Twitter" />
            </div>
            <div className="widgets_widgetContainer">
                <h2>What's happening?</h2>
                <TwitterTweetEmbed tweetId={"1341072021099327489"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="reactjs"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    options={{ text: "#reactjs is awesome", via: "dhwajsharmaa" }}
                />
            </div>
        </div>
    )
}

export default Widgets
