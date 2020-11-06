import { Button, Avatar } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';

const TweetBox = () => {
    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar src={'https://i.ibb.co/x5Nq2Wv/afterfocus-1549429174215.jpg'}/>
                    <input type="text" name="tweet" placeholder="What's happening?"/>
                </div>
                <input type="text" placeholder="Optional: Enter Image Url" className='tweetBox__imageInput'/>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;