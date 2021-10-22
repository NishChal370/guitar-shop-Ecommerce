import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

let initialInputData={
    name:"",
    detail:"",
    feature:"",
    type:"",
    price: null,
    imageOne:"",
    imageTwo:"",
    imageThree:"",
    productCompany:"",
    productQuantity:"",
    admin:{
        adminId:1
    },
    category: {
        categoryId:""
    }

};

function EditProducts() {
    const  { state } = useLocation();
    let [ inputData, setInputData ] = useState(initialInputData);
    const categoryState = useSelector(state => state.categoryReducer.data);

    const cateogariesList = (categoryState !== undefined) && categoryState.map((cateogary)=>{
        return cateogary.categoryName
    });

    const inputchangeHandler=(e)=>{
        let inputFiledName =  e.target.name;
        let value;

        if(inputFiledName ===  "category"){
            value = {
                categoryId: e.target.value
            }
        }else if(e.target.id === "inputImage"){
            value = e.target.files[0].name
        }else{
            value =  e.target.value
        }

        inputData[inputFiledName] = value;
        setInputData({...inputData});
    };

    const saveProduct=()=>{
        axios.post('http://localhost:3037/saveProduct',inputData )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    const saveProductHandler=(e)=>{
        e.preventDefault();
        saveProduct();
    };

    const setPropsToInitalInputData=()=>{
        
        if(state !== undefined){
            let{product, categoryId} = state;
            initialInputData={
                name: product.name,
                detail: product.detail,
                feature: product.feature,
                type: product.type,
                price: product.price,
                imageOne: product.imageOne,
                imageTwo: product.imageTwo,
                imageThree: product.imageThree,
                productCompany: product.productCompany,
                productQuantity: product.productQuantity,
                admin:{
                    adminId:1
                },
                category: {
                    categoryId:categoryId
                }
            
            }
        }else{
            initialInputData={
                name:"",
                detail:"",
                feature:"",
                type:"",
                price: null,
                imageOne:"",
                imageTwo:"",
                imageThree:"",
                productCompany:"",
                productQuantity:"",
                admin:{
                    adminId:1
                },
                category: {
                    categoryId:""
                }
            
            }
        }

        setInputData({...initialInputData});
    }

    useEffect(()=>{
        setPropsToInitalInputData();
    },[state])

    return (
        <div className="add-product__form">
            <h3>{(state === undefined)? "Add Products" : "Edit Product"}</h3>
            <form className="row g-3" onSubmit={saveProductHandler}>
                <div className="col-md-6">
                    <label for="inputProductName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputProductName" name="name" value={inputData.name}  onChange={inputchangeHandler}/>
                </div>
                <div className="col-sm-6">
                    <label for="cateogory" className="form-label">Cateogary</label>
                    <select className="form-select" id="cateogory" name="category" value={inputData.category.categoryId}  onChange={inputchangeHandler}>
                    <option selected>Choose...</option>
                    {(cateogariesList) && cateogariesList.map((cateogary, index)=>{
                        return <option key={"cateogryOptin"+index+1} value={index+1} >{cateogary}</option>
                    })}
                    </select>
                </div>
                <div className="col-sm-3">
                    <label for="productType" className="form-label">Type</label>
                    <select className="form-select" id="specificSizeSelect" name="type" value={inputData.type}  onChange={inputchangeHandler}>
                        <option selected>Choose...</option>
                        <option value="1">Acoustic</option>
                        <option value="2">Electric</option>
                        <option value="3">Semi-Acoustic</option>
                        <option value="3">Classical</option>
                    </select>
                </div>
                <div className="col-md-5">
                    <label for="inputCompanyName" className="form-label">Comapny Name</label>
                    <input type="text" className="form-control" id="inputCompanyName" name="productCompany" value={inputData.productCompany} onChange={inputchangeHandler}/>
                </div>
                <div className="col-md-4">
                    <label for="inputQuantity" className="form-label">Quantity</label>
                    <input type="text" className="form-control" id="inputQuantity" name="productQuantity" value={inputData.productQuantity} onChange={inputchangeHandler}/>
                </div>
               
                <div className="col-md-6">
                    <label for="inputFeature" className="form-label">Feature</label>
                    <input type="text" className="form-control" id="inputFeature" name="feature" value={inputData.feature} onChange={inputchangeHandler}/>
                </div>
                <div className="col-6">
                    <label for="inputDetail" className="form-label">Detail</label>
                    <input type="text" className="form-control" id="inputDetail" placeholder="1234 Main St" name="detail" value={inputData.detail} onChange={inputchangeHandler}/>
                </div>
                <div className="col-md-4">
                    <label for="inputImage" className="form-label">Image</label>
                    <input type="file" className="form-control" id="inputImage" name="imageOne" onChange={inputchangeHandler}/>
                </div>
                <div className="col-md-4">
                <label for="inputImage" className="form-label">Image second</label>
                    <input type="file" className="form-control" id="inputImage" name="imageTwo" onChange={inputchangeHandler}/>
                </div>
                <div className="col-md-4">
                <label for="inputImage" className="form-label">Image third</label>
                    <input type="file" className="form-control" id="inputImage" name="imageThree" onChange={inputchangeHandler}/>
                </div>
                <div className="col-8">
                    <div className="col-md-2">
                    <label for="inputPrice" className="form-label">Price</label>
                        <input type="text" className="form-control" id="inputPrice" name="price" value={inputData.price} onChange={inputchangeHandler}/>
                    </div>
                </div>
                {/* <div className="col-8"> */}
                    <button type="submit" className="btn btn-primary">Save Product</button>
                {/* </div> */}
            </form>
        </div>
    )
}

export default EditProducts