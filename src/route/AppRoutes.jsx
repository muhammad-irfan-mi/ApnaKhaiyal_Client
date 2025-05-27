import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Contact from '../Pages/conact/Contact';
import AuthPage from '../component/auth/AuthPage';
import Dashboard from '../Pages/dashboard/Dashboard';
import axios from 'axios';
import { use, useContext, useEffect } from 'react';
import { Context } from '../Context/ContextProvider';
import AllProperties from '../Pages/HouseForRent/AllProperties';



function AppRoutes() {
    const BASE_URL = import.meta.env.VITE_BASE_URL;


    const { token, setToken } = useContext(Context)
    const getToken = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/auth/token`, {
                withCredentials: true
            })
            console.log(response.data.accessToken)
            setToken(response.data.accessToken);
        } catch (error) {

        }
    }
    useEffect(() => {
        getToken();
    }, [])

    const routeList = [
        { path: '/', element: <Home /> },
        { path: '/about', element: <h1>About Page</h1> },
        { path: '/contact', element: <Contact /> },
        { path: '/my-account/', element: token ? <Dashboard /> : <AuthPage /> },
        { path: '/all-properties/', element: <AllProperties /> },
    ];

    return (
        <div>
            <Routes>
                {routeList.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Routes>
        </div>
    );
}

export default AppRoutes;
