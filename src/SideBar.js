import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SideBar.css"

function SideBar() {
    const recentItem = (topic)=>{
        return(
            <div className="sidebar__recentItem">
                <span className="sidebar__hash"></span>
                <p>{topic}</p>
            </div>
        )
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.rubrik.com/wp-content/uploads/2018/09/Data-Abstract.jpg" alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Madhu Ranjani V</h2>
                <h4>Solidity Developer</h4>
            </div>
            <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,540</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,448</p>
            </div>

            
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('#ethereum')}
                {recentItem('#blockchain')}
                {recentItem('#golangcommunity')}
                {recentItem('#hyperledgerbesu')}
            </div>

        </div>
    )
}

export default SideBar
