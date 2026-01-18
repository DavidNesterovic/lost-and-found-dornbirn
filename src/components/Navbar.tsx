import {NavLink, Link} from 'react-router-dom'
import {useState} from 'react'

// was das?
// const linkClass = ({ isActive }: { isActive: boolean }) =>
//     isActive
//         ? 'text-blue-600 font-semibold'
//         : 'text-gray-600 hover:text-blue-600'

// damit machsch programmatisch die class
// syntax: boolean ? 'fortnite' : 'pubage' =
// if (bool) { return 'fortnite } else { return 'pubage }
// react router die property isActive, schaut efach nur ob des die offene route isch

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        {name: "Home", path: "/"},
        {name: "Lost", path: "/lost"},
        {name: "Found", path: "/found"},
    ]

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

                {/* LOGO */}
                <Link to="/" className="text-xl font-bold tracking-tight text-gray-900 group">
                    Lost<span className="text-blue-600 transition-colors group-hover:text-blue-500">&</span>Found
                </Link>

                {/* 2. DESKTOP MENU */}
                {/* NavLink wurde von Gemini generiert */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className="relative group py-2"
                        >
                            {({isActive}) => (
                                <>
                                    <span className={`text-sm font-medium transition-colors duration-300 ${
                                        isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
                                    }`}>
                                        {link.name}
                                    </span>

                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ease-out ${
                                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}/>
                                </>
                            )}
                        </NavLink>
                    ))}

                    <Link
                        to="/lost"
                        className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 hover:shadow-md transition-all"
                    >
                        + Eintrag
                    </Link>
                </div>

                {/* 3. MOBILE HAMBURGER BUTTON */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* 4. MOBILE MENU DROPDOWN */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white px-4 pb-4 pt-2 shadow-lg">
                    <div className="flex flex-col space-y-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({isActive}) =>
                                    `block rounded-md px-3 py-2 text-base font-medium ${
                                        isActive
                                            ? 'bg-blue-50 text-blue-600'
                                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link
                            to="/lost"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block w-full text-center rounded-md bg-blue-600 px-3 py-2 text-base font-medium text-white hover:bg-blue-500"
                        >
                            + Eintrag erstellen
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;