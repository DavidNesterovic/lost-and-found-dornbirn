import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import MainLayout from './layouts/MainLayout'

const App = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default App