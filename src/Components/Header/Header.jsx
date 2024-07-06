import React from 'react'
import logo from "./netflix.png"
import { Link } from "react-router-dom"
import {GoSearch} from "react-icons/go"

const Header = () => {
  return (
   <nav className="header">

    <img src={logo} alt="ur image" />

    <div>
      <Link to="/tvshows">TV shows</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/recent">Recently Added</Link>
      <Link to="/mylist">My List</Link>
    </div>

   <GoSearch/>
   </nav>
  )
}

export default Header