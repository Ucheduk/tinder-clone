import React from 'react';
import Header from '../layouts/Header';
import ChatCard from '../cards/ChatCard';

const Chat = () => {
  return (
    <>
      <Header backButton="/" />
      <ChatCard
        name="Aishwarya Rai"
        message="Hey! how are you"
        timestamp="35 minutes ago"
        profilePic="https://www.generatormix.com/images/female-celebrities/aishwarya-rai.jpg"
      />
      <ChatCard
        name="Christina Hendricks"
        message="Whats up?"
        timestamp="35 minutes ago"
        profilePic="https://www.generatormix.com/images/female-celebrities/christina-hendricks.jpg"
      />
      <ChatCard
        name="Freida Pinto"
        message="Hi dear"
        timestamp="35 minutes ago"
        profilePic="https://www.generatormix.com/images/female-celebrities/freida-pinto.jpg"
      />
    </>
  )
}

export default Chat
