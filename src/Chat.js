import React, {useEffect, useState} from 'react'
import "./Chat.css"
import {useParams} from "react-router-dom";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from './firebase';
import Message from "./Message";
import ChatInput from "./ChatInput";

function Chat() {

    const {roomId} = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState([]);

    useEffect(() => {
        if (roomId){
            db.collection("rooms")
            .doc(roomId)
            .onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
            
        }

        db.collection('rooms').doc(roomId)
        .collection('messaged')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => setRoomMessages(
            snapshot.docs.map(doc => doc.data())
        ))
        

    }, [roomId]);

         
    return (
        <div className="chat">
            <div className="chat_header">
                <div className="char_headerleft">
                    <h4 className="chat_channelname">
                        <strong>
                            #{roomDetails?.name}
                        </strong>
                        <StarBorderIcon/>
                    </h4>
                </div>
                <div className="chat_headerright">
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </div>
            </div>
            <div className="chat_messages">
                {/* messages... */}
                {roomMessages.map(({message, name, timestamp, userimage}) => (
                    <Message
                    message = {message}
                    user = {name}
                    timestamp = {timestamp}
                    userimage = {userimage}
                    />
                ))}
            </div>

            <ChatInput channelName = {roomDetails?.name}
            channelId = {roomDetails?.channelId}/>

        </div>
    )
}

export default Chat
