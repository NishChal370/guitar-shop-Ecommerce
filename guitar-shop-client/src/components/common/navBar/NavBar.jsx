import React from 'react'
import './NavBar.css'
import { MdOutlineShoppingBag } from "react-icons/md";
import { GiLoveHowl } from "react-icons/gi";
import { useSelector } from 'react-redux';

function NavBar() {
    const categoryState = useSelector(state => state.categoryReducer.data);
    
    return (
        <nav className="navbar  fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <figure>
                    <a className="navbar-brand" href="#">
                        <img src="https://www.musicplanet.co.nz/media/logo/websites/1/logo.png" alt="company logo" width="80%" height="24%" className="d-inline-block "/>
                    </a>
                </figure>
                <div>
                    <section>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link nav-link--top-margin" href="#">STORE LOCATION</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle nav-link--top-margin" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">MY ACCOUNT</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item " href="#scrollspyHeading3">LOG IN</a></li>
                                    <li><a className="dropdown-item" href="#scrollspyHeading4">CREATE ACCOUNT</a></li>
                                </ul>
                            </li>
                            {[<GiLoveHowl/>, <MdOutlineShoppingBag/>].map((value,index)=>{
                                return(
                                    <li key={`productNav+${index}`}className="nav-item">
                                        <a className="nav-link nav-logo--size" href="#">{value}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                    <section>
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            {(categoryState !== undefined) && categoryState.map((value, index)=>{
                                return(
                                    <li key={`navCateog ${index}`} className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">{value.categoryName.toUpperCase()}</a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#scrollspyHeading3">Third</a></li>
                                            <li><a className="dropdown-item" href="#scrollspyHeading4">Fourth</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#scrollspyHeading5">Fifth</a></li>
                                        </ul>
                                    </li>
                                )
                            })}
                        </ul>
                    </section>
                </div>
            </div>            
        </nav>
    )
}

export default NavBar