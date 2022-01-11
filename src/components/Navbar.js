import React, {useState } from 'react';
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';
import './Navbar.scss';

const Navigation = () => (
  <nav className='hamburger-menu'>
    <ul className='h-full'>
        <li>
        <Link to='/'>HOME</Link>
        </li>
        <li><a href="#mint">MINT</a></li>
        <li><a href="#assets">ASSETS</a></li>
        <li><a>WALLET CONNCECT</a></li>
    </ul>
  </nav>
);

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className='navbar'>
        {/* <Button className='btn-primary' route='/mint' title='Minting available on XX/XX' />
        <Button className='btn-primary' route='/mint' title='Mint' /> */}
        <div className="menu-icon">
             <Hamburger toggled={isOpen} toggle={setOpen} color='#fff' />
          </div>
      </div>

      {isOpen && <Navigation />}
    </>
  );
};

export default Navbar;
