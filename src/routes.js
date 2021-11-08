import Welcome from "./Welcome";


function Login() {
    return (
        <div>{'Login page'}</div>
    )
}
const privateRoutes = [
    {
        path:'/',
        component:<Welcome/>

    }
]

const publicRoutes = [
    {
        path:'/login',
        component:<Login/>

    }
]

const routes = {
    privateRoutes:privateRoutes,
    publicRoutes:publicRoutes
}

export default routes;