import React, { useState } from 'react'
import { Route, Switch, useHistory } from 'react-router';
// import ProductsList from './admin/ProductsList';
import SideNavBar from './common/navBar/SideNavBar';
import ProductsList from './common/productCart/ProductsList';
import ProfilePanel from './common/profile/ProfilePanel';
import "./index.css"

function ProductsPanel() {
    const history = useHistory();
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
                    <ProductsList show={selectedProductName} calledFrom="user"/>
                </Route>                    
            </Switch>

        </div>
        </>
    )
}

export default ProductsPanel
