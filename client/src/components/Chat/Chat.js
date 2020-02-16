import React, { useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

const Chat = ({location}) => {
    useEffect(()=>
    {
        const data = queryString.parse(location.search);
        const userName =  data.userName;
        const room =  data.room;
        
    })
    return     (
    <h1>Chat</h1>
    );
}
export default Chat;