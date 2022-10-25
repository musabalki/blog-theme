import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeLayout from "./pages/HomeLayout"

import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import About from "./pages/About";
import Categories from "./pages/Categories";

const routes=[
    {
        path:'/',
        element:<HomeLayout/>,
        name:'home',
        children:[
            {
                index:true,
                element:<Home/>,
                name:'index',
            },
            {
                path:'blog',
                element:<Blog/>
            },
            {
                path:'categories',
                element:<Categories/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact',
                element:<Contact/>
            }
        ]
    }
]

export default routes;