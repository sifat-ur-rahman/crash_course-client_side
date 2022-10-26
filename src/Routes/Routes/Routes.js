import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Home/Home";
import Details from "../../Details/Details";
import Blog from "../../Blog/Blog";



export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:()=>fetch('https://server-three-phi.vercel.app/courses')
                
            },
            {
                path: '/details/:id',
                element: <Details></Details> ,
                loader: ({params})=> fetch(`https://server-three-phi.vercel.app/courses/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
            
        ]
    }
])