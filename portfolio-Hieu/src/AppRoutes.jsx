import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import { useAuth } from './contexts/AuthenticationContext';
import LoginPage from './pages/LoginPage/LoginPage';
import AboutMePage from './pages/AboutMePage/AboutMePage';

const AppRoutes = () => {
    const { user } = useAuth();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={user ? <HomePage /> : <LoginPage />} />
                <Route path={"aboutme"} element={user ? <AboutMePage /> : <LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;