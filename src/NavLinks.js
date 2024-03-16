import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const NavLinks = () => {
  return (
    <>
    <nav>
        <ul>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>
    <Outlet />
    </>
  );
};

export default NavLinks;
