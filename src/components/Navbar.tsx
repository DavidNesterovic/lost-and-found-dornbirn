import { NavLink } from 'react-router-dom'

const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
        ? 'text-blue-600 font-semibold'
        : 'text-gray-600 hover:text-blue-600'

const Navbar = () => {
    return (
        <nav className="border-b px-6 py-4 flex gap-6 sticky top-0 bg-gray-200">
            <NavLink to="/" className={linkClass}>
                Home
            </NavLink>
            <NavLink to="/found" className={linkClass}>
                Lost
            </NavLink>
            <NavLink to="/lost" className={linkClass}>
                Found
            </NavLink>
        </nav>
    )
}

export default Navbar