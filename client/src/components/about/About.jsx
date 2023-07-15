import React from 'react'
import './About.css'


export default function About() {
    return (
        <>
            <div className="about-container">
                <div className="about-heading">
                    <h1>About Us</h1>
                </div>
                <div className="about-content">
                    <div className="image-container">
                        <img
                            src="https://images.pexels.com/photos/7674899/pexels-photo-7674899.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Lady"
                            className="lady-image"
                        />
                        {/* Updated image source */}
                    </div>
                    <div className="description">
                        <p>

                            Welcome to Siddharth's Blog! It's a dynamic and interactive website built using React.js,
                            HTML, CSS, and JavaScript. Our platform offers a wide range of features to enhance your blogging experience.
                            Register an account to unlock the full potential of the site. Once registered, you can create captivating blog
                            posts, customize them with images, and publish them for the world to see. Edit and update your posts whenever
                            you like, and delete them if necessary. With a user-friendly interface and seamless navigation, 
                            Siddharth's Blog provides an intuitive platform for sharing your thoughts, stories, and insights. 
            
                        </p>
                    </div>
                </div>
            </div>
            <footer className="bg-light text-dark fixed-bottom">
                <div className="container-fluid p-4">
                    <div className="row">
                        <div className="col text-center">
                            <ul className="list-inline social-icons">
                                <li className="icon list-inline-item mr-6">
                                    <a href='https://www.linkedin.com/in/siddharth-kumar-20bb57261/'>
                                        <i className="fab fa-linkedin-in fa-2x text-dark"></i>
                                    </a>
                                </li>
                                <li className="icon list-inline-item mr-6">
                                    <a href="https://github.com/siddofficial13">
                                        <i className="fab fa-github fa-2x text-dark"></i>
                                    </a>
                                </li>
                                <li className="icon list-inline-item mr-6">
                                    <a href='https://www.instagram.com/siddharthkr13/'>
                                        <i className="fab fa-instagram fa-2x text-dark"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <p className="mb-0 text-dark font-weight-bold" style={{ fontSize: '18px' }}>
                                © 2023 Created by Siddharth
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}