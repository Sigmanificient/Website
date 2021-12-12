import React from "react";

function Header() {
  return (
    <React.Fragment>
        <header className="header">
            <div className="header--container">
                <a className="logo" href="#">
                    <img src="svg/logo/logo__no_bg.svg" alt="Bite Cope Startup logo"/>
                    Bitecope
                </a>
                <nav className="nav">
                    <a className="nav--link" href="#">Home</a>
                    <a className="nav--link" href="#about_us">About Us</a>
                    <a className="nav--link" href="#contact-us">Contact Us</a>
                    <a className="nav--link" href="/t&c">T&C</a>
                    <a className="nav--link" href="/FAQ">FAQ</a>
                    <a className="nav--link" href="/PrivacyPolicy">Privacy Policy</a>
                </nav>

                <a id="hamburger" href="#" className="hamburger">
                    <img src="svg/button_hamburger.svg" alt="+"/>
                </a>
            </div>
        </header>
    </React.Fragment>
  );
}

export default Header;
