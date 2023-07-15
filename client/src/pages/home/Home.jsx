import React, { useEffect, useState } from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import axios from "axios"
import { useLocation } from 'react-router-dom'
export default function Home() {
  const [posts,setPosts] = useState([]);
  const {search}  = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('/posts' + search); // Remove the leading slash
        setPosts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  },[search]);
  return (
    <>
       <Header />
       <div className="home">
        <Posts posts ={posts} />
        <SideBar />
    </div>
    </>
   
  )
}
