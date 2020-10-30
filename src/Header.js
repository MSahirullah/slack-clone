import React from 'react';
import "./Header.css";
import { Avatar} from '@material-ui/core';
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue }  from "./StateProvider";

function Header() {

    const [{user}] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
                {/* avatar for logged user */}
                <Avatar
                    className="header_avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                {/* time icon */}
                <AccessTimeIcon/>

            </div>
            <div className="header_search">
                {/* searh icon */}
                <SearchIcon/>
                {/* input */}
                <input placeholder="Search"/>
            </div>
            <div className="header_right">
                {/* help icon */}
                <HelpOutlineIcon/>
            </div>

        </div>
    )
}

export default Header
