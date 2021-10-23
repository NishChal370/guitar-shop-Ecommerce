import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { GoDiffAdded, GoDiffRemoved } from "react-icons/go";

import { setCategory } from '../../redux/Action';
import { NavLink } from 'react-router-dom';

// function SideNav({changeSelectedProduct}) {
function SideNav() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isAddingCateogary, setAddingCateogary] = useState(false);
    const [cateogaryInput, setCateogaryInput] = useState({categoryName:""});
    const adminState = useSelector(state => state.adminReducer.data);
    const categoryProductState = useSelector(state => state.categoryReducer.data);
    
    const editCateogaryHandler=()=>{
        (!isAddingCateogary)
            ?setAddingCateogary(true)
            :setAddingCateogary(false)
    };

    const availableCateogaryList = (categoryProductState !== undefined) && (categoryProductState.map((cateogary)=>{
            return cateogary.categoryName;
        }));

    // for alert message using external libary
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1600,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });


    const saveCateogary=()=>{
        if(!availableCateogaryList.includes(cateogaryInput.categoryName)){
            // Make a request for a user with a given ID
            axios.post('http://localhost:3037/saveCategory',cateogaryInput)
            .then(function (response) {
                categoryProductState.push(response.data);
                dispatch(setCategory(categoryProductState));

                Toast.fire({
                    icon: 'success',
                    title: 'Cateogary Added'
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        }else{
            Toast.fire({
                icon: 'success',
                title: 'Exists'
            });
        }
        
    
    }
    
    const deleteCateogary=(cateogaryInfo)=>{
        // // Make a request for a user with a given ID
        axios.delete(`http://localhost:3037/deleteCategoryById/${cateogaryInfo.categoryId}`)
            .then(function (response) {
                let categoryProductIndex = categoryProductState.indexOf(cateogaryInfo);
                categoryProductState.splice(categoryProductIndex, 1);
                dispatch(setCategory(categoryProductState));

                Toast.fire({
                    icon: 'error',
                    title: `Cateogary ${cateogaryInput.categoryName} removed !!`
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const deleteCateogaryHandler=()=>{
        categoryProductState.map((cateogaryInfo)=>{
            if(cateogaryInput.categoryName.toString() === cateogaryInfo.categoryName){
                deleteCateogary(cateogaryInfo);
            }else{
                Toast.fire({
                    icon: 'error',
                    title: "Data not found !!"
                });
            }
        })
    }

    const changeCateogaryInputHandler=(e)=>{
        cateogaryInput.categoryName = e.target.value;
        setCateogaryInput({...cateogaryInput});
    }

    return (
        <div className="side__nav">
            <section>
                <h2 className="side__nav__title">Available cateogary</h2>
            </section>
            <section>
                <ul className="side__nav__list">
                    {(categoryProductState !== undefined) && availableCateogaryList.map((cateogary, index)=>{
                        return <NavLink className="nav-link nav-link--padding" key={`catogaryNav${index}`} exact to={{pathname:"/admin/products/p", state: cateogary}}>{cateogary}</NavLink>
                        // <li key={`catogaryNav${index}`} onClick={()=>changeSelectedProduct(cateogary)}>{cateogary}</li>
                    })}                 
                </ul>
            </section>
                <>
                <section>
                    <h2 className="side__nav__title">Setting</h2>
                </section>
                <section>
                    <ul className="side__nav__list">
                        <li onClick={()=>history.push({pathname:  "/admin/products/a"})}>Add Products</li>
                        <li onClick={editCateogaryHandler}>Edit cateogary</li>
                        {(isAddingCateogary)&& <li className="add-cateogary__field"><input type="text"  value={cateogaryInput.categoryName} onChange={changeCateogaryInputHandler} /><p onClick={saveCateogary}><GoDiffAdded/></p> <p onClick={deleteCateogaryHandler}><GoDiffRemoved/></p></li>}
                        {/* <li onClick={()=>history.push({pathname:  "/admin/products/editProduct", state: {fetch:"adminById" }})}>My Account</li> */}
                        
                        <li onClick={()=>history.push({pathname: "/admin/products/profile", state: {id: adminState[0].adminId, fetch:"adminById" }})}>My Account</li>
                    </ul>
                </section>
                </>

        </div>
    )

}
export default SideNav
