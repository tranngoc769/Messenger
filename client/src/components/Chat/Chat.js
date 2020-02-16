import React, { useEffect } from 'react';
import { useState } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
let socket;
const SERVER = 'localhost:7699';
const Chat = ({location}) => {
    
  const [userName, setUserName] = useState('');
  const [room, setRoom] = useState('');

    useEffect(()=>
    {
        const data = queryString.parse(location.search);
        const uName =  data.userName;
        const rName =  data.room;
        
        socket = io(SERVER);

        setUserName(uName);
        setRoom(rName);
        console.log(socket);
    },[SERVER,location.search])
    return     (
    <h1>Chat</h1>
    );
}
export default Chat;