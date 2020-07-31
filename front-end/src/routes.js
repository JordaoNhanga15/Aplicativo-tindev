import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Login from './pages/login'
//import Main from './pages/Main'
import All from './pages/All_header'

class Routes extends React.Component{
    render(){
        return(
        <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/dev/:id" component={All} />
        </BrowserRouter>
        )
    }
}

export default Routes;