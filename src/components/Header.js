import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
          <div className="hamburger-menu">
            <input id="menu_toggle" type="checkbox" />

            <ul className="menu_box" id="menu_box">
              <li><a href="#lore" >Lore</a></li>
              <li><a href="#about" >About</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>
          <div className="menu_desk">
            <ul className="menu_desk--left">
              <li><a href="#lore">Lore</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li>
                  <Link to="/mint">mint</Link>
              </li>
            </ul>
          </div>
        </header>
    )
}

export default Header
