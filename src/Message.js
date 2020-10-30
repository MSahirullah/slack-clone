import React from 'react';
import "./Message.css";

function Message({message, timestamp, user, userimage}) {
    return (
        <div className="messages">
            <img src = {userimage}
            alt="" />

            <div className="message_info">
                <h4>
                    {user} 
                    <span className="message_time">
                        {new Date(timestamp?.toDate()).toUTCString()}
                        </span>
                </h4> 
                <p>
                    {message}
                </p>
            </div>
        </div>
    )
}

export default Message
