import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow flex-1 p-6">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default MainLayout
