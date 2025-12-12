import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import { useAuth } from './contexts/AuthenticationContext';
import LoginPage from './pages/LoginPage/LoginPage';
import AboutMePage from './pages/AboutMePage/AboutMePage';

/**
 * If user is authenticated, they can access pages directly,
 * otherwise they will be redirected to the LoginPage
 * @returns 
 */
const AppRoutes = () => {
    const { user } = useAuth();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="" element={user ? <HomePage /> : <LoginPage />} />
                <Route path={"aboutme"} element={ user ? <AboutMePage /> : <LoginPage />} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;