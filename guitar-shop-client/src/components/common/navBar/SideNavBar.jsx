import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function SideNavBar({getSelectedProductName}) {
    const categoryProductState = useSelector(state => state.categoryReducer.data);
    
    const availableCateogaryList = (categoryProductState !== undefined) && (categoryProductState.map((cateogary)=>{
        return cateogary.categoryName;
    }));

    return(
        <>
        <div className="side__nav">
            <section>
                <h2 className="side__nav__title">Available cateogary</h2>
            </section>
            <section>
                <ul className="side__nav__list">
                    {(categoryProductState !== undefined) && availableCateogaryList.map((cateogary, index)=>{
                        console.log(cateogary);
                        return <NavLink className="nav-link nav-link--padding" key={`catogaryNav${index}`} exact to={{pathname:"/products/p", state: cateogary}} onClick={()=>{getSelectedProductName(cateogary)}}>{cateogary}</NavLink>
                        // <li key={`catogaryNav${index}`}  onClick={()=>changeSelectedProduct(cateogary)}>{cateogary}</li>
                    })}                 
                </ul>
            </section>
        </div>

        </>
    )
}

export default SideNavBar
