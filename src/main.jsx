import { StrictMode, createContext, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header, Footer } from "./components/layout/index.jsx";
import { Home } from "./routes/home.jsx";

export const OutletContext = createContext({
    scrollToAbout: () => {},
    setScrollToAbout: () => {},
});

const Layout = () => (
    <div className={"bg-[#111319] text-white"}>
        <Header />
        <main className={"min-h-screen"}>
            <Outlet />
        </main>
        <Footer />
    </div>
);

const App = () => {
    const [scrollToAbout, setScrollToAbout] = useState(() => () => {});

    return (
        <OutletContext.Provider value={{ scrollToAbout, setScrollToAbout }}>
            <RouterProvider router={router} />
        </OutletContext.Provider>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);