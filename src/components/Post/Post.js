import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/RepeatOneOutlined';
import FavoritedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PublishIcon from '@material-ui/icons/PublishOutlined';
const Post = ({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar,
}) => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src='https://i.ibb.co/x5Nq2Wv/afterfocus-1549429174215.jpg' />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Sangram Nath 
                            <span>
                                <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, atque tenetur? Placeat.</p>
                    </div>
                </div>
                <img src="https://i.gifer.com/3NOM.gif" alt=""/>
            </div>
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize='small'/>
                <RepeatIcon fontSize='small'/>
                <FavoritedIcon fontSize='small'/>
                <PublishIcon fontSize='small'/>
            </div>
        </div>
    );
};

export default Post;