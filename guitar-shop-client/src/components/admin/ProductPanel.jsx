import React, { useState } from 'react'
import { Route, Switch, useHistory } from 'react-router';

import SideNav from './SideNav';
import EditProducts from './EditProductsPanel';
// import ProductsList from './ProductsList';
import NavBar from '../common/navBar/NavBar';
import ProfilePanel from '../common/profile/ProfilePanel';
import ProductsList from '../common/productCart/ProductsListPanel';
import ProductsListPanel from '../common/productCart/ProductsListPanel';
import EditProductsPanel from './EditProductsPanel';

function ProductPanel() {
    // const history = useHistory();
    // // const  [selectedProduct, setSelectedProduct]= useState("Guitar");
   
    // const changeSelectedProductHandler=(name)=>{
    //     // history.push("/admin/products/p");
    //     history.push({pathname:"/admin/products/p", state: name});
    //     // setSelectedProduct(name);
    // }

    return (
        <div>
            <NavBar calledFrom="admin"/>
            <div  className="admin__body">
                {/* <SideNav changeSelectedProduct={changeSelectedProductHandler}/> */}
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
