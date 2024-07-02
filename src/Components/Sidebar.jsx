import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { Context } from "./Context/Context";

const Sidebar = () => {


const [extended,setExtended]=useState(false)
const {onSent,  prevPromt,setRecentPromt,newChat} = useContext(Context)

const loadPromt = async(prompt) =>{
  setRecentPromt(prompt)
  onSent(prompt)
}


  return (
    <div className="sidebar">
      <div className="top">
        <img onClick={ ()=>setExtended(!extended)} className="menu"  src={assets.menu_icon} alt="" />
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended&&<p>New Chat</p>}
        </div>

        {extended&& <div className="recent">
          <p className="recent-title">Recent</p>
          { prevPromt.map((item,index)=>(
             
              <div onClick={()=>loadPromt(item)} className="recent-entry">
            <img src={assets.message_icon} alt="" />
            <p>{item.slice(0,18)}...</p>
          </div>

            
          ))}
          
        </div>}
       
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
         {extended&&<p>Help</p>} 
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
            {extended&&<p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended&&<p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
