import React from "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://picsum.photos/200/300/?blur=2" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ma? 
                Beatae labore ipsa excepturi facilis quas. </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarlistitem">life</li>
            <li className="sidebarlistitem">Namaz</li>
            <li className="sidebarlistitem">Quran</li>
            <li className="sidebarlistitem">sports</li>
            <li className="sidebarlistitem">cricket</li>
            <li className="sidebarlistitem">tec</li>

        </ul>
        </div>
        <div className="sidebarSocial">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarsocial">
            <i className="sidebaricon fa-brands fa-facebook-square"></i>
            <i className="sidebaricon fa-brands fa-instagram-square"></i>
            <i className="sidebaricon fa-brands fa-twitter-square"></i>
            <i className="sidebaricon fa-brands fa-google-plus-square"></i>
            </div>
        </div>
    </div>

  )
}
