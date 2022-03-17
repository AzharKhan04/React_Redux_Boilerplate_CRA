import { lazy } from "react";

const Welcome = lazy(()=>import('./Welcome'));
const UserLogin = lazy(()=>import('./UserLogin'));

const privateRoutes = [
    {
        path:'/',
        component:<Welcome/>

    }
]

const publicRoutes = [
    {
        path:'/login',
        component:<UserLogin/>

    }
]

const routes = {
    privateRoutes:privateRoutes,
    publicRoutes:publicRoutes
}

export default routes;