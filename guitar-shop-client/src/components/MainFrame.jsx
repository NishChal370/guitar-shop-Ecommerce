import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// import Home from './home/HomePage'
import Footer from './common/footer/Footer'
import NavBar from './common/navBar/NavBar'
// import ProductsPanel from './ProductsPage'
// import OverviewPanel from './OverviewPage'
// import ShoppingCartPanel from './ShoppingCartPage'
import OverviewPage from './OverviewPage'
import ProductsPage from './ProductsPage'
import ShoppingCartPage from './ShoppingCartPage'
import HomePage from './home/HomePage'

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