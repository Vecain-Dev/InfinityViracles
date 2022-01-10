import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_cols">
                <a className="logo"><img src="./assets/images/mark.png" className=""  /></a>
                <ul className="footer-menu hide-mob">
                    <li><a href="#lore">Lore</a></li>
                    <li><a href="#roadmap">Roadmap</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="#team">Team</a></li>
                </ul>
                </div>
                <div className="footer-bottom">
                <ul>
                    <li>All rights reserved. Infinity Viracles 2022 ©.</li>
                </ul>

                </div>
            </div>
      </footer>
    )
}

export default Footer