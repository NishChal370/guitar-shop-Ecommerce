import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './home/Home'
import Footer from './common/footer/Footer'
import NavBar from './common/navBar/NavBar'
import ProductsPanel from './ProductsPanel'

function MainFrame() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path="/products">
                    <ProductsPanel/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
                
            </Switch>
            <Footer/>
        </div>
    )
}

export default MainFrame