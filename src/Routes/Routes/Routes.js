import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Home/Home";
import Details from "../../Details/Details";
import Blog from "../../Blog/Blog";
import NoPage from "../../NoPage/NoPage";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Courses from "../../Courses/Courses";



export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element: <Courses></Courses>,
                loader:()=>fetch('https://server-three-phi.vercel.app/courses')
                
            },
            {
                path: '/details/:id',
                element:  <PrivateRoute><Details></Details></PrivateRoute> ,
                loader: ({params})=> fetch(`https://server-three-phi.vercel.app/courses/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>  
            },
            
        ]
    },
    {
        path:'*',
        element: <NoPage></NoPage>
    }
])