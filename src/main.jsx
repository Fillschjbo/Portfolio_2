import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import {Header, Footer} from "./components/layout/index.jsx";
import {Home} from "./routes/home.jsx";

const Layout = () => (
    <div className={"bg-[#111319] text-white"}>
      <Header />
      <main className={"min-h-screen"}>
        <Outlet />
      </main>
      <Footer/>
    </div>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
    ]
  }])

createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
)

