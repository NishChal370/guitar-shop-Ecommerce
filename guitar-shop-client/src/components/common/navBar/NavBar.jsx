import React, { useState } from 'react'

import './NavBar.css'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { GiLoveHowl } from "react-icons/gi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function NavBar({calledFrom}) {
    let history = useHistory();
    const categoryState = useSelector(state => state.categoryReducer.data);
    const cartState = useSelector(state => state.cartReducer.data);

    console.log("FROM NAV", cartState);
    // const directToSignUpPage=()=>{
    //     // history.push({pathname:'/customer/signup', state:{formType: formType}})
    //     history.push('/customer/registration');
    // }

    const directToCartPage=()=>{
        if(cartState.length >= 1){
            history.push('/shoppingcart');
        }
        else{
            alert("Please Login !!");
        }
    }
    return (
        <nav className="navbar  fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <figure className="navbar-brand" onClick={()=> history.push("/")}>
                    <img src="https://www.musicplanet.co.nz/media/logo/websites/1/logo.png" alt="company logo" width="80%" height="24%" className="d-inline-block "/>
                </figure>

                {
                (calledFrom !== "admin") // will only show when called fro user
                    &&  <div>
                            <section>
                                <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                        <p className="nav-link nav-link--top-margin">STORE LOCATION</p>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <p className="nav-link dropdown-toggle nav-link--top-margin" data-bs-toggle="dropdown"  role="button" aria-expanded="false">MY ACCOUNT</p>
                                        <ul className="dropdown-menu">
                                            <li><p className="dropdown-item " onClick={()=> history.push('/customer/login')}>LOG IN</p></li>
                                            <li><p className="dropdown-item" onClick={()=>   history.push('/customer/registration')}>CREATE ACCOUNT</p></li>
                                        </ul>
                                    </li>
                                    {[<GiLoveHowl/>, <MdOutlineShoppingBag/>].map((value,index)=>{
                                        return(
                                            <li key={`productNav${index}`}className="nav-item" onClick={()=>directToCartPage()}>
                                                <p className="nav-link nav-logo--size" >{value}</p>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </section>
                            <section>
                                <ul className="nav justify-content-end">
                                    <li className="nav-item">
                                    <NavLink className="nav-link"  exact to="/">HOME</NavLink>
                                        {/* <a className="nav-link active" aria-current="page" onClick={()=> history.push("/")}>HOME</a> */}
                                    </li>
                                    
                                    {(categoryState !== undefined) && categoryState.map((value, index)=>{
                                        return(
                                            <li key={`navCateog ${index}`} className="nav-item dropdown">
                                                <NavLink className="nav-link dropdown-toggle"  exact to={{pathname:"/products/p", state: value.categoryName}}>{(value.categoryName !== null) && value.categoryName.toUpperCase()}</NavLink>
                                                {/* <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" onClick={()=>changeSelectedProductHandler(value.categoryName)} role="button" aria-expanded="false">{(value.categoryName !== null) && value.categoryName.toUpperCase()}</a>
                                                <ul className="dropdown-menu">
                                                    <li><p className="dropdown-item" href="...">Third</p></li>
                                                    <li><p className="dropdown-item" href="...">Fourth</p></li>
                                                    <li><hr className="dropdown-divider"/></li>
                                                    <li><p className="dropdown-item" href="...">Fifth</p></li>
                                                </ul> */}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </section>
                        </div>
                }
                
            </div>            
        </nav>
    )
}

export default NavBar