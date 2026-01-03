import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Found from "./pages/Found.tsx";
import Lost from "./pages/Lost.tsx";
import MainLayout from './layouts/MainLayout'

const App = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/lost" element={<Lost />} />
                <Route path="/found" element={<Found />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App