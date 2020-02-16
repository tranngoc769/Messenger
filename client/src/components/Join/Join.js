import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';

export default function SignIn() {
  const [userName, setUserName] = useState('');
  const [room, setRoom] = useState('');
  return (
    <div>
    <div className="body"></div>
		<div className="grad"></div>
		<div className="header">
			<div>Site<span>Random</span></div>
		</div>
		<br></br>
		<div className="login">
           <input placeholder="Name" type="text" onChange={(event) => setUserName(event.target.value)} />
           <br /><br />
          <input placeholder="Room" type="text" onChange={(event) => setRoom(event.target.value)} />
          <br />
          <Link onClick={e => (!userName || !room) ? e.preventDefault() : null} to={`/chat?user=${userName}&room=${room}`}>
         <input type="button" value='Join Room'></input>
      </Link>
		</div>
    </div>
  );
}