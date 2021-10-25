import React from 'react'
import { Route, Switch } from 'react-router-dom'

import HomePage from './home/HomePage'
import OverviewPage from './OverviewPage'
import ProductsPage from './ProductsPage'
import Footer from './common/footer/Footer'
import NavBar from './common/navBar/NavBar'
import ShoppingCartPage from './ShoppingCartPage'

function MainFrame() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path="/shoppingcart">
                    <ShoppingCartPage/>    
                </Route>
                <Route path="/product/overview">
                    <OverviewPage/>
                </Route>
                <Route path="/products">
                    <ProductsPage/>
                </Route>
                <Route path="/">
                    <HomePage/>
                </Route>  
            </Switch>
            <Footer/>
        </div>
    )
}

export default MainFrame