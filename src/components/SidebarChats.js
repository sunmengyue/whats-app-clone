import React from 'react';
import './SidebarChats.css';
import SidebarChat from './SidebarChat';

const SidebarChats = () => {
  return (
    <div className='sidebar__chats'>
      <SidebarChat addNewChat />
      <SidebarChat />
      <SidebarChat />
      <SidebarChat />
    </div>
  );
};

export default SidebarChats;
