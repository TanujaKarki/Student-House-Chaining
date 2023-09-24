import React from 'react'
import {useState} from 'react';
import Home from '../Home';
import Notice from './Notice';
import Issue from './Issue';
import Update from './Update';
import Profile from '../Profile';
import Tab from '../Tab';

const Content = (props) => {


    const [Option, setOption] = useState("Home");



    function change_board(type) {
        console.log(type);
        setOption(type);
        console.log("Option -> " + Option)
    }

    return (

        <div className="main" >
            <div className="Navbar">
                <div className="Menu">
                    <label onClick={() => { change_board("Home") }}>Home</label>
                    <label onClick={() => { change_board("Notice") }}>Notice</label>
                    <label onClick={() => { change_board("Issue") }}>Issue</label>
                    <label onClick={() => { change_board("Update") }}>Update</label>
                    <label onClick={() => { change_board("Profile") }}>Profile</label>
                </div>
            </div>
            <div className="Dashboard">
                <Tab type="Manager"/>
                <div id="content">
                    {(Option === "Home") && <Home />}
                    {(Option === "Notice") && <Notice />}
                    {(Option === "Issue") && <Issue />}
                    {(Option === "Update") && <Update />}
                    {(Option === "Profile") && <Profile />}
                </div>
            </div>
        </div>
    )
}

export default Content
