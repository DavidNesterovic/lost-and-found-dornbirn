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
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default App