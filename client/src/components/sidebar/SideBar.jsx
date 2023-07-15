import React, { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="http://localhost:3000/static/media/heroImage.ab918b146f45b2f3e297.png"
          alt=""
        />
        <p>
          I'm Siddharth, an undergraduate student at Birla Institute of
          Technology, Mesra. I have a passion for competitive coding and aspire
          to become a skilled web developer. Currently, I'm focused on building
          projects using the MERN stack and always eager to expand my knowledge
          and explore new technologies.
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to ={`/?cat=${c.name}`} className='link'> <li className="sidebarListItem">{c.name}</li></Link>           
          ))}
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <a href="https://www.linkedin.com/in/siddharth-kumar-20bb57261/">
            <i className="fab fa-linkedin-in fa-2x text-dark"></i>
          </a>
          <a href="https://github.com/siddofficial13">
            <i className="fab fa-github fa-2x text-dark px-4"></i>
          </a>
          <a href="https://www.instagram.com/siddharthkr13/">
            <i className="fab fa-instagram fa-2x text-dark"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
