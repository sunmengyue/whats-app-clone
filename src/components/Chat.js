import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';
import IconButton from '@material-ui/core/IconButton';
import { Avatar } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import db from '../firebase';

const Chat = () => {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  const [roomName, setRoomName] = useState('');
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
    }
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log('You typed: >> ', input);
    setInput('');
  };

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='chat__headerInfo'>
          <h3>{roomName}</h3>
          <p>Last seen at...</p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        <p className={`chat__message ${true && `chat__receiver`}`}>
          <span className='chat__name'>Simon</span>
          Hey Guys
          <span className='chat__timestamp'>3:52pm</span>
        </p>
      </div>
      <div className='chat__footer'>
        <InsertEmoticonOutlinedIcon />
        <form>
          <input
            type='text'
            placeholder='Type a message'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} type='submit'>
            Send a message
          </button>
        </form>
        <MicNoneOutlinedIcon />
      </div>
    </div>
  );
};

export default Chat;
