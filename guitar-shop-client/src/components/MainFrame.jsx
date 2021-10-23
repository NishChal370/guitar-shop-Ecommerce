import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './home/Home'
import Footer from './common/footer/Footer'
import NavBar from './common/navBar/NavBar'
import ProductsPanel from './ProductsPanel'
import OverviewPanel from './OverviewPanel'
import ShoppingCartPanel from './ShoppingCartPanel'

function MainFrame() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path="/shoppingcart">
                    <ShoppingCartPanel/>    
                </Route>
                <Route path="/product/overview">
                    <OverviewPanel/>
                </Route>
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