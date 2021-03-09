import React, { useState, useEffect } from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';

const SidebarChat = ({ id, name, addNewChat }) => {
  const [seed, setSeed] = useState('');

  const createChat = () => {
    const roomName = prompt('please enter name for chat');

    if (roomName) {
      // do some clever database stuff
    }
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  return !addNewChat ? (
    <div className='sidebarChat'>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className='sidebarChat__info'>
        <h2>{name}</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div className='sidebarChat' onClick={createChat}>
      <h2>Add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
