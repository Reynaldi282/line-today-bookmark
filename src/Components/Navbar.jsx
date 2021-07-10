import React, { useState } from "react";
import "./css/Navbar.css";
import Dropdown from "@material-tailwind/react/Dropdown"

import { useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";
import { toPath } from "../utils/helper";

import {FaBookmark} from 'react-icons/fa'

const Navbar = () => {
  const appState = useSelector((state) => state.appState);
  const routerState = useSelector((state) => state.router);
  const [open, setOpen] = useState(false);
  const [category,setCategory] = useState("Top");
  
 
  const closeMenu = () => {
    setOpen(false);
  };

  const setName = (name) => {
    setCategory(name);
  };

  return (
    <header class="bg-white shadow">
      <nav class="z-50 container mx-auto px-6 py-3">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <NavLink to="/" className="nav-logo">
                <img
                  className="w-32"
                  src="https://static-today.line-scdn.net/dist/d4981dd1/static/img/brand-logo-rectangle-today-solid.svg"
                  alt="logo"
                />
              </NavLink>
            </div>

        
          </div>
          <div class="md:flex items-center">
            <div class="flex items-center py-2 -mx-1 md:mx-0">
              <a
                class="block w-1/2 px-3 py-2 mx-1 rounded text-center text-sm bg-gray-300 font-medium text-white leading-5 hover:bg-gray-600 md:mx-0 md:w-auto"
                href="/bookmarks"
              >
                <FaBookmark></FaBookmark>
                {/* {list.map((b, i) => {
                  return (
  
                       <p>{b}</p> 
                     
                  );
                })} */}
              </a>
            </div>
          </div>
        </div>

        <div class="mt-3 py-3 -mx-3 overflow-y-auto whitespace-no-wrap scroll-hidden">
  
        
          <ul className={"tab-items"}>
          <Dropdown
                color="lightBlue"
                placement="bottom-start"
                buttonText={category}
                buttonType="filled"
                size="lg"
                rounded={false}
                block={true}
                ripple="light"
                
            >
            
            {appState.categoryTab.map((category, i) => {
              return (
                <li
                  className={
                    toPath(category.name) === routerState.location.pathname
                      ? "menu-item current"
                      : "menu-item"
                  }
                  key={i}
                >
                  <NavLink
                    onClick={() => setName(category.name)}

                    exact
                    to={toPath(category.name)}
                    activeClassName="nav-selected"
                    className={
                      category.highlight === true
                        ? "nav-links hightlight"
                        : "nav-links"
                    }
                
                  >
                    {category.name}
                  </NavLink>
                </li>
              );
            })}
            </Dropdown>
          </ul>
          
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
