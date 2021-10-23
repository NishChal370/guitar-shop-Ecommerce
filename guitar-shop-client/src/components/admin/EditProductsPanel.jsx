import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import Swal from 'sweetalert2';

let initialInputData={
    name:"",
    detail:"",
    feature:"",
    type:"",
    price: "",
    productCompany:"",
    productQuantity:"",
    admin:{
        adminId:1
    },
    category: {
        categoryId:""
    }

};
let emptyInputData={
    name:"",
    detail:"",
    feature:"",
    type:"",
    price: "",
    productCompany:"",
    productQuantity:"",
    admin:{
        adminId:1
    },
    category: {
        categoryId:""
    }

};

function EditProductsPanel() {
    const  { editingProductData } = useLocation();

    let [ inputData, setInputData ] = useState(initialInputData);
    let [inputImage, setinputImage] = useState({imageOne: ""});
    const categoryState = useSelector(state => state.categoryReducer.data);

    const cateogariesList = (categoryState !== undefined) && categoryState.map((cateogary)=>{
        return cateogary.categoryName
    });

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

    const inputchangeHandler=(e)=>{
        let inputFiledName =  e.target.name;
        let value;
        if(e.target.id === "inputImage"){
            inputImage[inputFiledName] = e.target.files[0];
            setinputImage({...inputImage});
        }
        else if (inputFiledName ===  "category"){
            value = {
                categoryId: e.target.value
            }
            inputData[inputFiledName] = value;
        }else{
            value =  e.target.value;
            inputData[inputFiledName] = value;
        }
        
        setInputData({...inputData});
    };

    const saveProductHandler=(e)=>{
        e.preventDefault();
        
        if(!isInputFilesEmpty()){
            const formData=new FormData();
            formData.append("product", JSON.stringify(inputData));
            formData.append("file", inputImage.imageOne);

            if(editingProductData !== undefined){
                updateProduct(formData);
            }
            else{
                saveProduct(formData);
            }
            setInputData(emptyInputData);
        }
    };
    // editingProductData
    const updateProduct=(formData)=>{
        let { productId } = editingProductData.product;
        axios.post(`http://localhost:3037/updateProductById/${productId}`,formData )
          .then(function (response) {
              console.log(response);
            Toast.fire({
                icon: 'success',
                title: 'Product sucessfull Updated'
            });
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    const saveProduct=(formData)=>{
        axios.post('http://localhost:3037/saveProduct',formData )
          .then(function (response) {
            Toast.fire({
                icon: 'success',
                title: 'Product sucessfull added'
            });
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    const isInputFilesEmpty=()=>{
        let{name, detail, feature, type, price, productCompany, productQuantity, category} = inputData;
        let isEmpty = true;
        let emptyFiled = '';
        if(name === ''){
            emptyFiled = "Cateogary";
        }
        else if(category.categoryId === ''){
            emptyFiled = "Cateogary";
        }
        else if(type === ''){
            emptyFiled = "Type";
        }
        else if(productCompany === ''){
            emptyFiled = "Company name";
        }
        else if(productQuantity === ''){
            emptyFiled = "Product Quantity";
        }
        else if(feature === ''){
            emptyFiled = " product Feature";
        }
        else if(detail === ''){
            emptyFiled = "Product detail";
        }
        else if(price === ''){
            emptyFiled = "Price";
        }
        else{
            isEmpty = false;
        }

        if(isEmpty){
            Toast.fire({
                icon: 'error',
                title: emptyFiled +" is Empty"
            });
        }
        
        return isEmpty;
    }

    const setPropsToInitalInputData=()=>{
        
        if(editingProductData !== undefined){
            let{product, categoryId} = editingProductData;
            let{name, detail, feature, type, price, productCompany, productQuantity, imageOne, imageTwo, imageThree} = product;

            initialInputData={
                name: name,
                detail: detail,
                feature: feature,
                type: type,
                price: price,
                productCompany: productCompany,
                productQuantity: productQuantity,
                admin:{
                    adminId:1
                },
                category: {
                    categoryId:categoryId
                }
            
            }
            inputImage.imageOne = imageOne;
            setinputImage({...inputImage});
        }else{
            initialInputData= emptyInputData;
        }

        setInputData({...initialInputData});
    }


    useEffect(()=>{
        setPropsToInitalInputData();
    },[editingProductData])

    return (
        <div className="add-product__form">
            <h3>{(editingProductData === undefined)? "Add Products" : "Edit Product"}</h3>
            <form className="row g-3" onSubmit={saveProductHandler}>
                <div className="col-md-6">
                    <label htmlFor="inputProductName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="inputProductName" name="name" value={inputData.name}  onChange={inputchangeHandler}/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="cateogory" className="form-label">Cateogary</label>
                    <select className="form-select" id="cateogory" name="category" value={inputData.category.categoryId}  onChange={inputchangeHandler}>
                    <option selected>Choose...</option>
                    {(cateogariesList) && cateogariesList.map((cateogary, index)=>{
                        return <option key={"cateogryOptin"+index+1} value={index+1} >{cateogary}</option>
                    })}
                    </select>
                </div>
                <div className="col-sm-3">
                    <label htmlFor="productType" className="form-label">Type</label>
                    <select className="form-select" id="specificSizeSelect" name="type" value={inputData.type}  onChange={inputchangeHandler}>
                        <option selected>Choose...</option>
                        <option value="Acoustic">Acoustic</option>
                        <option value="Electric">Electric</option>
                        <option value="Semi-Acoustic">Semi-Acoustic</option>
                        <option value="Classical">Classical</option>
                    </select>
                </div>
                <div className="col-md-5">
                    <label htmlFor="inputCompanyName" className="form-label">Comapny Name</label>
                    <input type="text" className="form-control" id="inputCompanyName" name="productCompany" value={inputData.productCompany} onChange={inputchangeHandler}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputQuantity" className="form-label">Quantity</label>
                    <input type="text" className="form-control" id="inputQuantity" name="productQuantity" value={inputData.productQuantity} onChange={inputchangeHandler}/>
                </div>
               
                <div className="col-md-6">
                    <label htmlFor="inputFeature" className="form-label">Feature</label>
                    <input type="text" className="form-control" id="inputFeature" name="feature" value={inputData.feature} onChange={inputchangeHandler}/>
                </div>
                <div className="col-6">
                    <label htmlFor="inputDetail" className="form-label">Detail</label>
                    <input type="text" className="form-control" id="inputDetail" name="detail" value={inputData.detail} onChange={inputchangeHandler}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputImage" className="form-label">Image</label>
                    <input type="file" className="form-control" id="inputImage" name="imageOne" onChange={inputchangeHandler}/>
                </div>
                <div className="col-md-4">
                <label htmlFor="inputImage" className="form-label">Image second</label>
                    <input type="file" className="form-control" id="inputImage" name="imageTwo" onChange={inputchangeHandler}/>
                </div>
                <div className="col-md-4">
                <label htmlFor="inputImage" className="form-label">Image third</label>
                    <input type="file" className="form-control" id="inputImage" name="imageThree" onChange={inputchangeHandler}/>
                </div>
                <div className="col-8">
                    <div className="col-md-2">
                    <label htmlFor="inputPrice" className="form-label">Price</label>
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

export default EditProductsPanel