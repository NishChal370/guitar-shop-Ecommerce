import React, { useState } from 'react'
import { Route, Switch, useHistory } from 'react-router';

import SideNav from './SideNav';
import EditProducts from './EditProducts';
// import ProductsList from './ProductsList';
import NavBar from '../common/navBar/NavBar';
import ProfilePanel from '../common/profile/ProfilePanel';
import ProductsList from '../common/productCart/ProductsList';

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
                        <ProductsList calledFrom="admin"/>
                    </Route>
                    <Route path="/admin/products/a">
                        <EditProducts/>
                    </Route>
                    
                </Switch>
            </div>
        </div>
    )
}
export default ProductPanel
