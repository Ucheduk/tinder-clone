import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatCard.css';
import { Link } from 'react-router-dom';

const ChatCard = ({ name, message, profilePic, timestamp }) => {
  return (
    <Link to={`/chat/${name}`}>
      <div className="chat-card">
        <Avatar className="chat-card_image" src={profilePic} />
        <div className="chat-card_details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat-card_timestamp">{timestamp}</p>
      </div>
    </Link>
  )
}

export default ChatCard;
