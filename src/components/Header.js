import React, {useState} from "react"

function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <React.Fragment>
            <script>hamburger()</script>
            <header className="header">
                <div className="header--container">
                    <a className="logo" href="/">
                        <img src="svg/logo/logo__no_bg.svg" alt="Bite Cope Startup logo"/>
                        Bitecope
                    </a>

                    <a className="nav--link" href="/">Home</a>
                    <a className="nav--link" href="/subscription">Subscription</a>
                    <a className="nav--link" href="/contact">Contact Us</a>

                    <nav id="menu" className={navbarOpen ? 'nav open' : 'nav'}>
                        <img id="closer" src="svg/cross-button.svg" alt="Close" onClick={handleToggle}/>

                        <a className="nav--link responsive-nav" href="/">Home</a>
                        <a className="nav--link responsive-nav" href="/subscription">Subscription</a>
                        <a className="nav--link responsive-nav" href="/contact">Contact Us</a>

                        <a className="nav--link" href="/#about_us">About Us</a>
                        <a className="nav--link" href="/t&c">T&C</a>
                        <a className="nav--link" href="/faq">FAQ</a>
                        <a className="nav--link" href="/privacy">Privacy Policy</a>
                    </nav>

                    <div id="hamburger" className={navbarOpen ? 'hamburger open' : 'hamburger'} onClick={handleToggle}>
                        <img src="svg/button_hamburger.svg" alt="+"/>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
}

export default Header;
