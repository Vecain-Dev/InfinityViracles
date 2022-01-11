import React, {useState } from 'react';
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react';
import './Navbar.scss';

const Header = () => {
   const [isOpen, setOpen] = useState(false);

      const Navigation = () => (
        <nav className='hamburger-menu'>
            <ul>
              <li><a href="#lore" >Lore</a></li>
              <li><a href="#about" >About</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li>
                  <Link to="/mint">mint</Link>
              </li>
          </ul>
      </nav>
    );

    return (
        <header>
          <div className="menu-icon">
             <Hamburger toggled={isOpen} toggle={setOpen} color='#fff' />
          </div>
          <div className="menu_desk">
            <ul className="menu_desk--left">
              <li><a href="#lore">Lore</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li>
                  <Link to="/mint">mint</Link>
              </li>
            </ul>
          </div>
          {isOpen && <Navigation />}
        </header>
    )
}

export default Header
