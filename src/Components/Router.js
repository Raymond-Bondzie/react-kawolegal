import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Startups from './Startups'



function Router(){
    return(
        <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/Login" component={Login} />
        <Route path="/Startups" component={Startups} />
        <Route path="/Register" component={Register} />
        </BrowserRouter>
    )
}

export default Router;