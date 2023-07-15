import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className="header">
     <div className="headerTitles">
        {/* <span className="headerTitleSm">Siddharth's</span> */}
        <span className="headerTitleLg">SoulScribble</span>
     </div>
     <img 
        className="headerImg"
        src="https://wepik.com/api/image/ai/06cdc7a9-4d6a-464d-9335-a05c0aecff00 "
        alt=""
     />
    </div>
  )
}
// https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
