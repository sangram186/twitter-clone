import React from 'react';
import Post from '../Post/Post';
import TweetBox from '../TweetBox/TweetBox';
import './Feed.css';

const Feed = () => {
    return (
        <div className='feed'>
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            
            {/* Tweet Box */}
            <TweetBox />

            {/* Post */}
            <Post />
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
        </div>
    );
};

export default Feed;