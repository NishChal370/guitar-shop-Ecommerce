import axios from 'axios';
import Swal from 'sweetalert2';
import React, { useState } from 'react'
import { useHistory } from 'react-router';

let initialInput ={
    buyerName: "",
    buyerAddress: "",
    buyerPhone: "",
    buyerEmail: "",
    buyerPassword: ""
}

function BuyerRegistrationPage() {
    const history = useHistory();
    const [inputData, setInputData] = useState(initialInput);

    const submitHandler=(e)=>{
        e.preventDefault();
        registerBuyer();
    }
    
    const changeHandler=(e)=>{
        let name = e.target.name;
        let value = e.target.value;
        inputData[name] = value;
        setInputData({...inputData});
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

    const registerBuyer=()=>{
        // Make a request for a user with a given ID
        axios.post(`http://localhost:3037/saveBuyer`, inputData)
            .then((response) => {
                if(response.data.status === 1){
                    Toast.fire({
                        icon: 'success',
                        title: 'Registered !!!'
                    });

                    history.push('/customer/login');
                }
                else if(response.data.status >= 5 || response.data.status <= 10){
                    Toast.fire({
                        icon: 'error',
                        title: response.data.statusMessage
                    });
                    
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
        <form className="login-input__container" onSubmit={submitHandler}>
            <h3>Sign UP</h3>
            <section className="input__container">
                <div className="form-group" >
                    <label htmlFor="exampleInputName1">Name</label>
                    <input type="name" className="form-control" id="exampleInputname1" name="buyerName" value={inputData.buyerName} onChange={changeHandler} aria-describedby="nameHelp" placeholder="Enter fullname"/>
                </div>
                <div className="form-group" >
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="buyerEmail" value={inputData.buyerEmail} onChange={changeHandler} aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name="buyerPassword" value={inputData.buyerPassword} onChange={changeHandler} placeholder="Password"/>
                </div>
                    <span style={{display: 'flex', gap: '2rem'}}>
                        <div className="form-group" >
                            <label htmlFor="exampleInputAddress1">Address</label>
                            <input type="address" className="form-control" id="exampleInputAddress1" name="buyerAddress" value={inputData.buyerAddress} onChange={changeHandler} aria-describedby="addressHelp" placeholder="Enter address"/>
                        </div>
                        <div className="form-group" >
                            <label htmlFor="exampleInputPhone1">Phone</label>
                            <input type="phone" className="form-control" id="exampleInputPhone1" name="buyerPhone" value={inputData.buyerPhone} onChange={changeHandler} aria-describedby="phoneHelp" placeholder="Enter phone"/>
                        </div>
                    </span>
                <br/>
                <button type='submit' className="btn btn-primary">Sign Up</button>
            </section>
            <section className="signup__option">
                <p>Already Have Account</p>
                <a onClick={()=> history.push('/customer/login')}>Log In</a>
            </section>
            <section className="message__container">
                <p> Welcome to Planet Music Store </p>
            </section>
        </form>
    </div>
    )
}

export default BuyerRegistrationPage
