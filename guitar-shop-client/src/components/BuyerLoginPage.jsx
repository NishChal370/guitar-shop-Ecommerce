import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import { setCart } from '../redux/Action';

let initialInput ={
    buyerEmail: "",
    buyerPassword: ""
}
function BuyerLoginPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState(initialInput);

    const changeHandler=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        inputData[name] = value;
        setInputData({...inputData});
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        
        loginBuyer();
        
    }

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

    const loginBuyer=()=>{
        // Make a request for a user with a given ID
        axios.get(`http://localhost:3037/buyer/login?buyerEmail=${inputData.buyerEmail}&buyerPassword=${inputData.buyerPassword}`)
            .then((response) => {
            // handle success
                console.log("Login");
                console.log(response);
                if(response.data.status === 0){
                    alert(response.data.statusMessage)
                    Toast.fire({
                        icon: 'error',
                        title: response.data.statusMessage
                    });
                    
                }
                else{
                    Toast.fire({
                        icon: 'success',
                        title: 'Welcome'
                    });
                    console.log("loginkdsfkjsdnkfjsndkjfnskjdfnkjsdn");
                    console.log(response.data[0].buyerId);
                    console.log("loginkdsfkjsdnkfjsndkjfnskjdfnkjsdn");
                    let cart ={
                        cartProducts:[],
                        buyer:{buyerId:response.data[0].buyerId}
                    }
                    createShoppingCart(cart);
                    history.push('/');
                }
            })
            .catch(function (error) {
            // handle error
            console.log("Error -> ",error);
            });
    }

    const createShoppingCart=(cart)=>{
       
        // Make a request for a user with a given ID
        axios.post(`http://localhost:3037/saveCart`,cart)
            .then((response) => {
                if(response.status.toString() === '200'){
                dispatch(setCart(response.data))

                }
            })
            .catch(function (error) {
                // handle error
                console.log("Error -> ",error);
            });
    }

    return (
        <div className="login__container">
            <figure>
                <img src="https://www.kindpng.com/picc/m/273-2738804_php-login-and-authentication-login-hd-png-download.png" alt="login-logo" />    
            </figure>
            <form className="login-input__container"  onSubmit={submitHandler}>
                <h3>Log IN</h3>
                <section className="input__container">
                    <div className="form-group" >
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="buyerEmail" value={inputData.buyerEmail} onChange={changeHandler} aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="buyerPassword" value={inputData.buyerPassword} onChange={changeHandler} placeholder="Password"/>
                    </div>
                    <br/>
                    <button type='submit' className="btn btn-primary">Login</button>
                </section>
                <section className="signup__option">
                    <p>Don't have account</p>
                    <a onClick={()=> history.push('/customer/registration')}>Sign Up</a>
                </section>
                <section className="message__container">
                    <p> Welcome to Planet Music Store </p>
                </section>
            </form>
        </div>
    )
}

export default BuyerLoginPage
