import React from "react";
import { useState } from 'react';
import { NavLink } from "react-router-dom";
import '../index.css';

export default function NavBar () {

    const [currentPage, setCurrentPage] = useState('Home');
    const handlePageChange = (page) => setCurrentPage(page);  

    return (
        <header className="bg-black text-green-400" id="nvbr">
            <div className="container mx-auto flex justify-center">
                <nav className="flex">
                    {/* Name / Github Link */}
                    <h1 className="inline-flex items-center py-7 px-0 mr-4 text-xl hover:text-white">
                        <a href="https://github.com/pr1me-e1gh7" target="_blank">David Caro</a>
                    </h1>

                    {/* Pages */}
                    <NavLink exact to="/" 
                        className={currentPage === 'Home' ? 'active:text-white text-4xl' : 'inline-flex items-center py-7 px-0 mr-4 text-xl hover:text-white'}>
                        <div onClick={() => handlePageChange("Home")}>&lt;About&gt;</div>
                    </NavLink>
                    <NavLink exact to="/Projects" 
                        className={currentPage === 'Projects' ? 'text-white text-4xl' : 'inline-flex items-center py-7 px-0 mr-4 text-xl hover:text-white'}>
                        <div onClick={() => handlePageChange("Projects")}>&lt;Projects&gt;</div>
                    </NavLink>
                    <NavLink exact to="/Contact"
                        className={currentPage === 'Contact' ? 'text-white text-4xl' : 'inline-flex items-center py-7 px-0 mr-4 text-xl hover:text-white'}>
                        <div onClick={() => handlePageChange("Contact")}>&lt;Contact&gt;</div>
                    </NavLink>
                    
                    {/* Resume */}
                    <a className="inline-flex items-center py-7 px-0 mr-4 text-xl hover:text-white"
                    href="https://drive.google.com/file/d/157yu4DMGOO1Qx-D4fQ_UF0BXG1HgMQ5S/view"
                    target="_blank">
                        &lt;Resume&gt;
                    </a>
                </nav>
            </div>
        </header>
    )
}