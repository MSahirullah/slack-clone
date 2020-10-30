import React, {useState, useEffect} from 'react'
import "./Sidebar.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from "./SidebarOption";
import db from "./firebase";
import {useStateValue} from "./StateProvider";

function Sidebar() {

    const [channels, SetChannels] = useState([]);
    const [{user}] = useStateValue();

    useEffect (() => {
        //run this code when side bar component loads, at once
        db.collection('rooms').onSnapshot(snapshot => (
            SetChannels(snapshot.docs.map(doc=>({
                id: doc.id,
                name: doc.data().name,
            }))
            )
        ));

    }, []);
    //kotu warahana his nisa ekaparai run wenne
    //[name] patan gaddi eka parai load    wenne eeta passe name kiana varibake eka change wena gane meka run wenawa

    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_info">
                    <h2>Slack-Clone</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                        {user?.displayName}
                    </h3>
                </div>
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr/>
            <SidebarOption Icon={AddIcon} title="Add channel" addChannelOption />

            {/* connect db and list all the channel */}
            {/* sidebaroption */}
            {channels.map((channel) => (
                <SidebarOption 
                title={channel.name} 
                id={channel.id} 
                />
            ))}
        </div>
    )
}

export default Sidebar
