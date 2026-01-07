import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
        ? 'text-blue-600 font-semibold'
        : 'text-gray-600 hover:text-blue-600'

const Navbar = () => {
    return (
        <nav className="border-b sticky top-0 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-6">
                <NavLink to="/" className={linkClass}>
                    Home
                </NavLink>
                <NavLink to="/lost" className={linkClass}>
                    Lost
                </NavLink>
                <NavLink to="/found" className={linkClass}>
                    Found
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar