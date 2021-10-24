import axios from 'axios';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import './Login.css'
import { setAdmin } from '../../redux/Action';


function Login() {
    const dispatch =  useDispatch();
    const adminState = useSelector(state => state.adminReducer.data);
    const [isFormSubmitted, setFormSubmitted] = useState(false);
    const [adminInfo, setAdminInfo] = useState({email:"", password:""})
    let history = useHistory();

    const changeInputHandler=(e)=>{
        let fieldName = e.target.type
        adminInfo[fieldName] = e.target.value;
        setAdminInfo({...adminInfo})
    }

    const SubmitFormHandler=(e)=>{
        e.preventDefault();
        setFormSubmitted(true);
        fetchAdminData();
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

    const validate=()=>{
        if(adminState.status === 0){
            Toast.fire({
                icon: 'error',
                title: adminState.statusMessage
            });
        }
        else{
            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
            });
            history.push({pathname:"/admin/products/p", state: "Guitar"});
        }
    }

    const fetchAdminData=()=>{
        // Make a request for a user with a given ID
        axios.get(`http://localhost:3037/admin/login?adminEmail=${adminInfo.email}&adminPassword=${adminInfo.password}`)
            .then((response) => {
                if(response.status.toString() === '200'){
                    dispatch(setAdmin(response.data));
                }
            })
            .catch(function (error) {
                // handle error
                console.log("Error -> ",error);
            });
    }
    
    useEffect(()=>{
        if(isFormSubmitted){
            validate();
            setFormSubmitted(false);
        }
    },[adminState]);

    return (
        <div className="login__container">
            <figure>
                <img src="https://www.kindpng.com/picc/m/273-2738804_php-login-and-authentication-login-hd-png-download.png" alt="login-logo" />    
            </figure>
            <form className="login-input__container"  onSubmit={(e)=>SubmitFormHandler(e)}>
                <h3>Log in</h3>
                <section className="input__container">
                    <div className="form-group" >
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" value={adminInfo.email} onChange={(e)=>changeInputHandler(e)} aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" value={adminInfo.password} onChange={(e)=>changeInputHandler(e)} id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <br/>
                    <button type='submit' className="btn btn-primary" >Login</button>
                </section>
                <section className="message__container" >
                    <p> Welcome to Planet Music Store </p>
                </section>
            </form>
        </div>
        
    )
}

export default Login