import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Main from "../Layout/Main";

import Category from "../Pages/Home/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News";
import Login from "../LoginRegistration/Login";
import LoginLayout from "../Layout/LoginLayout";
import Registration from "../LoginRegistration/Registration";
import PrivetRout from "./PrivetRout";
import Terms from "../Shared/TermsAndCondition/Terms";
const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
      {
        path:'/',
        element:<Navigate to='/category/0'></Navigate>

      },
      {
        path:'login',
        element:<Login></Login>

      },
      {
        path:'register',
        element:<Registration></Registration>
      },
      {
        path:'terms',
        element:<Terms></Terms>
      }

    ]
  },



  {
    path: "category",
    element: <Main></Main>,
    children: [
   
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/category/${params.id}`),
      },
      {
        path:'login',
        element:<Login></Login>
      },
      
    ],
  },



  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <PrivetRout><News></News></PrivetRout>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/news/${params.id}`),
      },
    ],
  },
]);
export default router;
