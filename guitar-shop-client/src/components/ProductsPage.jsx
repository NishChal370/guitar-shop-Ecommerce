import React, { useState } from 'react'
import { Route, Switch } from 'react-router';

import "./index.css"
import SideNavBar from './common/navBar/SideNavBar';
import ProfilePanel from './common/profile/ProfilePanel';
import ProductsListPanel from './common/productCart/ProductsListPanel';

function ProductsPage() {
    let  [selectedProductName, setSelectedProductName]= useState("Guitar");

    const getSelectedProductNameHandler=(name)=>{
        setSelectedProductName(name);
    }

    return (
        <>
        <img src="https://treasuremusicstore.com/wp-content/uploads/2020/06/Laney_amplifier_nepal-scaled.jpg" class="img-fluid" alt="..." style={{paddingTop:"8rem"}}></img>
        <div className="products__conatiner">
            <SideNavBar getSelectedProductName={getSelectedProductNameHandler}/>
            <Switch>
                <Route path="/profile">
                    <ProfilePanel/>
                </Route>
                <Route path="/products/p">
                    <ProductsListPanel show={selectedProductName} calledFrom="user"/>
                </Route>                    
            </Switch>

        </div>
        </>
    )
}

export default ProductsPage
