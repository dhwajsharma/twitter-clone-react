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

            <Post displayName="Dhwaj Sharma" userName="dhwajsharmaa" verified={true} text="working" avatar="https://instagram.fjai2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/153089225_855387085251197_7670750671328616892_n.jpg?_nc_ht=instagram.fjai2-1.fna.fbcdn.net&_nc_ohc=Js8fch_E6hoAX_LTNhb&tp=1&oh=326c16b9fe0c588211af622fd7211bd2&oe=605BAC6D" image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAADzCAMAAADAQmjeAAAAe1BMVEX///8AAACampqtra2FhYWJiYmqqqr19fXy8vI0NDReXl4rKyvt7e0ICAjBwcF2dnZGRkbi4uLX19chISFTU1O3t7ekpKTOzs7Hx8dnZ2cZGRnn5+fc3NxsbGxJSUmdnZ0lJSV7e3uTk5M/Pz9WVlYvLy83NzdoaGgWFhYBwP0DAAAElklEQVR4nO2d2W7jMAxF7XRx9n1P2qxN+/9fOCFlOZbTokAVQL6aex4C2JgCPLCjhaQySUIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCH/L+OF0AwdxoMYHdudifD+OQsdywMYvaUl1q+h4/Fl1kldVtAvXnOe3nFaho7Kg6O1mF452Ytu6LD+zGv+THaZXo5Wa70ebgLH9Vc2Jv7n2xNZfOidl4BB+WBeuEX5VncA/NKNNPZD5aZ+k6ZhIvJEH9C0Okr35W5nGyQiTyYS+v0YrRPtU4B4fGnqG3d/f4Y6LGjgg/v7WxnphoDrBQrVnTiF3u7vwwr9NMo9oY5yyf77eWiFOg8lDV1ZV5dt+iZ+jIJE5IlZy1WGhW1Lbp7DROTLTo365Vsbk2HIQoXkR9fshwa3t25pMgzHgEF5MTM71s6xmwnjaU+vz5jbIWFn0wjvVy72AnAOsszucj7XHdI4dFQe7O59BsDPJ8naVZ01djK4ad+yS+fK/nzo//43tWaRC+22YwF09inxkgud8FUMxVcIeSAo07JCsEsDl37PCg1Dh/IYbrWUDu5ip8xLIZRiTz853elNaBc6mEcwKq0QWqgloTL98poHcs9dYVAWmoeO5gG8l4ViGLjddXboaPy5be6mcbxzRUk/1QQdZK7U4XC16GneZywfmLnFEpuh7Bs0DdfQT+RUgqCPZaWrn/lrDO+cFhledX061ym2FToiT2Rz11tq2qeRXCIYuDu6a8iF2hEM3KJwMiWVBm4p/4Z+ed6sUNNcIZMPbFELrULH5IUrlMkwd4HsWLJUhGQr0YFeK1SEhpEJ6Ur1mxI/EBUhnYigc1kVIV3ZQRdTvntCkO0jlorQUnZ67dBB+VARWkgDKmYvcE7UQsck6cpE1AsdlA9lIVnEtdG3eGUhWSJEJSQzqrb9IZcgHKHPPO2IvAl3hNKtaZJBrh3nQnmzT6MYv2HJhfIjkq087xg6Kg9yobMRWo81C4Q8s7pC12+PfIL2zioVof1GPt9DR+VBRSjdStVrsvj9D+tKLlS0L51lZl3DC22kfUmPDHwNwYV0i3ocy65hpYdXResLOE2SicSzCrW1PHSZYB6yKZhP1sNM93XnjbSZtfoN5JXPlfGyazeqB/R1T8HC5EY0iQW9X7XoWLdMMh0W0Ov6gs0vHsyshI8V0gbuE/KGNccKZT+cx4OjSGnrPHv49d/XnqMVWvaiGOdKhbu2VYOmJPScpuDZeqEkpHXwPXRRMnGETLoEuoaXuEI6zq3Az9009WC+mU/Nz8VAtyokSVcc7Nnpgcn+QOMILeXiI2g83jhCmpn7As4qJFUh7XHEnlvdrrIIhLTkUBSFIhDS9U7RbkGh+kGhuhO50Al/YnWF5AL8AASF6g6F6g6F6s69EPiO1REaRZBqdIQ0cf8cNB5vKFR3KFR3KFR3HKEYTrg7Qge5AK94OUJafQD/SSkK1R0K1R0K1Z2ohfRXaU/IbcFJ5QlJEyDyES9BGxmL/1dtMYPvAMzkBAf4W+bSnM2j8iGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQsiD+QcDrDDkGyKtngAAAABJRU5ErkJggg==" />
            <Post />
            <Post />
            <Post />
            <Post />


        </div >
    )
}

export default Feed
