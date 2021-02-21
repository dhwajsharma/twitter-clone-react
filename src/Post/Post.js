import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import React from 'react'
import "./Post.css";

const Post = ({ displayName, userName, verified, text, image, avatar }) => {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            Rafeh Qazi{" "}
                            <span className="post_headerSpecial">
                                <VerifiedUserIcon className="post_badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, similique!</p>
                    </div>
                </div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAADzCAMAAADAQmjeAAAAe1BMVEX///8AAACampqtra2FhYWJiYmqqqr19fXy8vI0NDReXl4rKyvt7e0ICAjBwcF2dnZGRkbi4uLX19chISFTU1O3t7ekpKTOzs7Hx8dnZ2cZGRnn5+fc3NxsbGxJSUmdnZ0lJSV7e3uTk5M/Pz9WVlYvLy83NzdoaGgWFhYBwP0DAAAElklEQVR4nO2d2W7jMAxF7XRx9n1P2qxN+/9fOCFlOZbTokAVQL6aex4C2JgCPLCjhaQySUIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCH/L+OF0AwdxoMYHdudifD+OQsdywMYvaUl1q+h4/Fl1kldVtAvXnOe3nFaho7Kg6O1mF452Ytu6LD+zGv+THaZXo5Wa70ebgLH9Vc2Jv7n2xNZfOidl4BB+WBeuEX5VncA/NKNNPZD5aZ+k6ZhIvJEH9C0Okr35W5nGyQiTyYS+v0YrRPtU4B4fGnqG3d/f4Y6LGjgg/v7WxnphoDrBQrVnTiF3u7vwwr9NMo9oY5yyf77eWiFOg8lDV1ZV5dt+iZ+jIJE5IlZy1WGhW1Lbp7DROTLTo365Vsbk2HIQoXkR9fshwa3t25pMgzHgEF5MTM71s6xmwnjaU+vz5jbIWFn0wjvVy72AnAOsszucj7XHdI4dFQe7O59BsDPJ8naVZ01djK4ad+yS+fK/nzo//43tWaRC+22YwF09inxkgud8FUMxVcIeSAo07JCsEsDl37PCg1Dh/IYbrWUDu5ip8xLIZRiTz853elNaBc6mEcwKq0QWqgloTL98poHcs9dYVAWmoeO5gG8l4ViGLjddXboaPy5be6mcbxzRUk/1QQdZK7U4XC16GneZywfmLnFEpuh7Bs0DdfQT+RUgqCPZaWrn/lrDO+cFhledX061ym2FToiT2Rz11tq2qeRXCIYuDu6a8iF2hEM3KJwMiWVBm4p/4Z+ed6sUNNcIZMPbFELrULH5IUrlMkwd4HsWLJUhGQr0YFeK1SEhpEJ6Ur1mxI/EBUhnYigc1kVIV3ZQRdTvntCkO0jlorQUnZ67dBB+VARWkgDKmYvcE7UQsck6cpE1AsdlA9lIVnEtdG3eGUhWSJEJSQzqrb9IZcgHKHPPO2IvAl3hNKtaZJBrh3nQnmzT6MYv2HJhfIjkq087xg6Kg9yobMRWo81C4Q8s7pC12+PfIL2zioVof1GPt9DR+VBRSjdStVrsvj9D+tKLlS0L51lZl3DC22kfUmPDHwNwYV0i3ocy65hpYdXResLOE2SicSzCrW1PHSZYB6yKZhP1sNM93XnjbSZtfoN5JXPlfGyazeqB/R1T8HC5EY0iQW9X7XoWLdMMh0W0Ov6gs0vHsyshI8V0gbuE/KGNccKZT+cx4OjSGnrPHv49d/XnqMVWvaiGOdKhbu2VYOmJPScpuDZeqEkpHXwPXRRMnGETLoEuoaXuEI6zq3Az9009WC+mU/Nz8VAtyokSVcc7Nnpgcn+QOMILeXiI2g83jhCmpn7As4qJFUh7XHEnlvdrrIIhLTkUBSFIhDS9U7RbkGh+kGhuhO50Al/YnWF5AL8AASF6g6F6g6F6s69EPiO1REaRZBqdIQ0cf8cNB5vKFR3KFR3KFR3HKEYTrg7Qge5AK94OUJafQD/SSkK1R0K1R0K1Z2ohfRXaU/IbcFJ5QlJEyDyES9BGxmL/1dtMYPvAMzkBAf4W+bSnM2j8iGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQsiD+QcDrDDkGyKtngAAAABJRU5ErkJggg==" alt="" />
                <div className="post_footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
