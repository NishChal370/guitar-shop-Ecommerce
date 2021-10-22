import React, { useState } from 'react'
import { useHistory } from 'react-router';
import SideNavBar from './common/navBar/SideNavBar';
import "./index.css"

function ProductsPanel() {
    const history = useHistory();
    const  [selectedProduct, setSelectedProduct]= useState("Guitar");
   
    const changeSelectedProductHandler=(name)=>{
        history.push("/admin/products/p");
        setSelectedProduct(name);
    }

    return (
        <div className="products__conatiner">
            <SideNavBar changeSelectedProduct={changeSelectedProductHandler}/>
            <h1>1Product panel</h1>
            <h1>2Product panel</h1>
            <h1>3Product panel</h1>
            <h1>4Product panel</h1>
            <h1>5Product panel</h1>
            <h1>6Product panel</h1>
            <h1>7Product panel</h1>
            <h1>8Product panel</h1>
            <h1>9Product panel</h1>
            <h1>10Product panel</h1>
            <h1>11Product panel</h1>
            <h1>12Product panel</h1>
            <h1>13Product panel</h1>
            
            <h1>14Product panel</h1>
            <h1>15Product panel</h1>
            <h1>16Product panel</h1>
            <h1>17Product panel</h1>
            <h1>18Product panel</h1>
            <h1>19Product panel</h1>
            <h1>Product panel</h1>
            <h1>Product panel</h1>
            <h1>Product panel</h1>
            <h1>Product panel</h1>
            <h1>Product panel</h1>
            <h1>Product panel</h1>

        </div>
    )
}

export default ProductsPanel
