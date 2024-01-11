import Logo from '../assets/logo.svg';
import TwitterLogo from '../assets/twitter.svg';
import FacebookLogo from '../assets/facebook.svg';

import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className="footer items-center p-4 bg-white shadow-[0px_-5px_15px_rgba(0,0,0,0.3)] text-black mt-auto">
                <div className="container flex items-center justify-between">
                    <aside className="justify-self-start">
                        <img src={Logo} alt="" />
                    </aside>

                    <nav className="flex gap-3 text-base font-medium justify-self-center">
                        <NavLink to="/prices">Prices</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contacts</NavLink>

                    </nav>


                    <nav className=" flex gap-4 justify-self-end">
                        <a href="/"><img src={FacebookLogo} alt="facebook" /></a>
                        <a href="/"><img src={TwitterLogo} alt="twitter" /></a>
                    </nav>
                </div>
            </footer>

            <footer className="footer footer-center px-4 pb-4 bg-white">
                <aside >
                    <p className='text-center text-base-300 ml-24'> Copyright © 2024 Adi Arifin. All rights reserved.</p>
                </aside>
            </footer>

        </>
    )
}

export default Footer;