import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Found from "./pages/Found.tsx";
import Lost from "./pages/Lost.tsx";
import MainLayout from './layouts/MainLayout'
import RegisterPage from "./pages/RegisterPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import AdminCategoriesPage from "./pages/AdminCategoriesPage";
import ProtectedAdminRoute from "./pages/ProtectedAdminRoute.tsx";

const App = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/lost" element={<Lost />} />
                <Route path="/found" element={<Found />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFound />} />
                <Route
                    path="/admin/categories"
                    element={
                        <ProtectedAdminRoute>
                            <AdminCategoriesPage />
                        </ProtectedAdminRoute>
                    }
                />
            </Route>
        </Routes>
    )
}

export default App