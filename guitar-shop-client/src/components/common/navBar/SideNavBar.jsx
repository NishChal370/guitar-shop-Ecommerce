import React from 'react'
import { useSelector } from 'react-redux';

function SideNavBar() {
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
                        return<li key={`catogaryNav${index}`} >{cateogary}</li>
                    })}                 
                </ul>
            </section>
        </div>

        <h1>Side Nav</h1>
        <h1>Side Nav</h1>
        <h1>Side Nav</h1>
        <h1>Side Nav</h1>

        <h1>Side Nav</h1>
        <h1>Side Nav</h1>
        <h1>Side Nav</h1>
        <h1>Side Nav</h1>
        <h1>Side Nav</h1>
        <h1>Side Nav</h1>
        <h1>Side Nav</h1>

        <h1>Side Nav</h1>
        <h1>Side Nav</h1>
        <h1>Side Nav</h1>
        </>
    )
}

export default SideNavBar
