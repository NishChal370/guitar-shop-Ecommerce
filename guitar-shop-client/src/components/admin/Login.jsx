import axios from 'axios';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import './Login.css'
import { setAdmin } from '../../redux/Action';


function Login() {
    const adminState = useSelector(state => state.adminReducer.data);
    const dispatch =  useDispatch();
    
    const [adminInfo, setAdminInfo] = useState({email:"", password:""})
    let history = useHistory();

    const changeHandler=(e)=>{
        let fieldName = e.target.type
        adminInfo[fieldName] = e.target.value;
        setAdminInfo({...adminInfo})
    }

    const SubmitHandler=(e)=>{
        e.preventDefault();
        validate();
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
        const existingEmail = adminState[0].adminEmail;
        const existingPassword = adminState[0].adminPassword;
          
        if(existingEmail === adminInfo.email && existingPassword === adminInfo.password){
            Toast.fire({
                icon: 'success',
                title: 'Signed in successfully'
            });
            
            setAdminInfo({email:"", password:""});
            history.push("/admin/products/p");
        }
        else{
            Toast.fire({
                icon: 'error',
                title: 'Incorrect email or password !!'
            });
        }
    }

    const fetchAdminData=()=>{
        // Make a request for a user with a given ID
        axios.get(`http://localhost:3037/admin/login?adminEmail=nis@dd.com&adminPassword=1234`)
            .then((response) => {
            // handle success
            if(response.status.toString() === '200'){
                let adminResponse = response.data.map((data, i)=>{
                    return {adminId: data.adminId, adminEmail: data.adminEmail, adminPassword: data.adminPassword}
                });
                
                dispatch(setAdmin(adminResponse));
            }

            })
            .catch(function (error) {
                // handle error
                console.log("Error -> ",error);
            });
    }

    useEffect(()=>{
        fetchAdminData();
    },[]);

    return (
        <div className="login__container">
            <figure>
                <img src="https://www.kindpng.com/picc/m/273-2738804_php-login-and-authentication-login-hd-png-download.png" alt="login-logo" />    
            </figure>
            <form className="adminlogin__container" onSubmit={(e)=>SubmitHandler(e)} >
                <h3>Log in</h3>
                <section className="input__container">
                    <div className="form-group" >
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" value={adminInfo.email} onChange={(e)=>changeHandler(e)} aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" value={adminInfo.password} onChange={(e)=>changeHandler(e)} id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <br/>
                    <button type='submit'  className="btn btn-primary">Login</button>
                </section>
                <section className="message__container">
                    <p> Welcome to Planet Music Store </p>
                </section>
            </form>
        </div>
        
    )
}

export default Login