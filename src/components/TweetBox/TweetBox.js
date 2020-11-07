import { Button, Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import db from '../../firebase';
import './TweetBox.css';

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('');

    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Sangram Nath',
            userName: 'sangram',
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://i.ibb.co/x5Nq2Wv/afterfocus-1549429174215.jpg',
            verified: true,
        })

        setTweetMessage('');
        setTweetImage('');
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar src={'https://i.ibb.co/x5Nq2Wv/afterfocus-1549429174215.jpg'}/>
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        type="text"
                        placeholder="What's happening?"/>
                </div>
                <input
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    type="text" 
                    placeholder="Optional: Enter Image Url" 
                    className='tweetBox__imageInput'/>
                <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;