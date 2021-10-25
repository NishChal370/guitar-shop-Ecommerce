import React from 'react'
import { Route, Switch } from 'react-router';

import SideNav from './SideNav';
import NavBar from '../common/navBar/NavBar';
import EditProductsPanel from './EditProductsPanel';
import ProfilePanel from '../common/profile/ProfilePanel';
import ProductsListPanel from '../common/productCart/ProductsListPanel';

function ProductPanel() {

    return (
        <div>
            <NavBar calledFrom="admin"/>
            <div  className="admin__body">
                <SideNav/>
                <Switch>
                    <Route path="/admin/products/profile">
                        <ProfilePanel/>
                    </Route>
                    <Route path="/admin/products/p">
                        <ProductsListPanel calledFrom="admin"/>
                    </Route>
                    <Route path="/admin/products/a">
                        <EditProductsPanel/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}
export default ProductPanel
