import { NavLink } from "react-router-dom";

function Navbar({ logo }) {

    return (
        <>
            <>
                {/* navbar */}
                <header className="shadow-lg fixed top-0 left-0 right-0 bg-white z-50">
                    <nav className="h-20">
                        <div className="container h-full flex justify-between items-center">
                            {/* logo */}
                            <NavLink to="/" className="logo">
                                <img src={logo} alt="logo" />
                            </NavLink>
                            {/* Menu */}
                            <div className="hidden sm:flex items-center sm:gap-3 md:gap-5 text-base font-medium">
                                <NavLink to="/prices">Prices</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/contact">Contacts</NavLink>
                                <NavLink
                                    to="/"
                                    className="border-2 border-transparent py-[10px] px-5 bg-success rounded-lg text-white font-semibold hover:bg-transparent hover:border-2 hover:border-success hover:text-success"
                                >
                                    Get Started
                                </NavLink>
                            </div>
                            {/* Button untuk Mobile Menu */}
                            <button className="w-8 h-8 flex flex-col justify-center gap-2 sm:hidden">
                                <div className="h-1 w-full bg-black rounded-sm" />
                                <div className="h-1 w-full bg-black rounded-sm" />
                                <div className="h-1 w-full bg-black rounded-sm" />
                            </button>
                        </div>
                    </nav>
                </header>
            </>

        </>
    )
}

export default Navbar;