import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import isAuthenticated from './Services/auth.service';
import routes from './routes';

const getAuth = () => {

    return isAuthenticated();
}

function App() {

    return ( 
   
        <BrowserRouter>
        <Suspense fallback="loading ...">
        <Routes>
            {
                getAuth() && 
                routes.privateRoutes.map((route)=>{
                    return (
                        <Route path={route.path} element={route.component} />
                    )

                })
            }
            {
                   routes.publicRoutes.map((route)=>{
                    return (
                        <Route path={route.path} element={route.component} />
                    )

                })

            }
        </Routes>
        </Suspense>
      </BrowserRouter>
    );
}

export default App;