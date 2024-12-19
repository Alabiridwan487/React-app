import React from 'react'
import { FaSearch } from "react-icons/fa";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div>
            <h2>KiiTech</h2>
        </div>
        <div>
            <div className='search-container'>
                <input type="search" placeholder='search products' />
                <FaSearch />
            </div>
        </div>

        <div>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Products</a>
            <a href="">Contacts</a>
        </div>
        <div>
            <button>Login</button>
            <button>Register</button>
        </div>
    </nav>
  )
}

export default Navbar
