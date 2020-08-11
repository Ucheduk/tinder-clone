import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Header from '../layouts/Header';
import './ChatScreen.css';

const ChatScreen = () => {
  const name = 'MIA'
  const [inputMsg, setInputMsg] = useState('')
  const [messages, setMessages] = useState([
    {
      type: 'incoming',
      image: 'https://www.generatormix.com/images/female-celebrities/aishwarya-rai.jpg',
      message: 'Hey! how are you'
    },
    {
      type: 'incoming',
      image: 'https://www.generatormix.com/images/female-celebrities/aishwarya-rai.jpg',
      message: 'How was your day?'
    },
    {
      type: 'outgoing',
      message: 'Hey! how are you doing '
    }
  ]);

  const handleSend = e => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        type: 'outgoing',
        message: inputMsg
      }
    ]);
    setInputMsg('');
  }
  return (
    <>
      <Header backButton="/chat" />
      <div className="chat-screen">
        <p className="chat-screen_timestamp">YOU MATCHED WITH {name} ON 10/06/20</p>
        {messages.map((message, index) => 
          message.type === 'incoming' ? (
            <div key={index} className="chat-screen_incoming">
              <Avatar
                className="chat-screen_image"
                alt={name}
                src={message.image}
              />
              <p>{message.message}</p>
            </div>

          ) :
          (
            <div key={index} className="chat-screen_outgoing">
              <p>{message.message}</p>
            </div>
          )
        )}

        <form className="chat-screen_form">
          <input
            className="chat-screen_input"
            placeholder="Type a message..."
            type="text"
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
          />
          <button
            className="chat-screen_btn"
            type="submit"
            onClick={handleSend}
          >
            SEND
          </button>
        </form>

      </div>
    </>
  )
}

export default ChatScreen;
