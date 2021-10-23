import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';

import "./ProfilePanel.css";

function ProfilePanel() {
    const  { state} = useLocation();
    const [profile, setProfile] = useState();
    const adminState = useSelector(state => state.adminReducer.data);
    console.log("admin",adminState);
    console.log("stat ",state);
    console.log("prof ",profile);
    // const[profile, setProfile] = useState();

    const fetchUserProfile=()=>{
        // Make a request for a user with a given ID
        axios.get(`http://localhost:3037/${state.fetch}/${state.id}`)
            .then((response) => {
            // handle success
            if(response.status.toString() === '200'){
                setProfile(response.data);
            }
            })
            .catch(function (error) {
                // handle error
                console.log("Error -> ",error);
            });
    }
    useEffect(()=>{
        setProfile(adminState);
        fetchUserProfile();
    },[])
    console.log(profile);
    return (
        <>
        {(profile !== undefined) && (
            <div className="profile__container">
                <figure className="profile__figure">
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />    
                </figure>
                <section style={{ paddingTop: '0px', margin:"0px 4rem", position: 'relative', bottom:"4rem"}}>
                    <h3>Admin Info</h3>
                    <p className="user__name">{profile.adminUserName}</p>
                    <section className="info__container">
                        <span className="personal-info__container">
                            <p><span style={{fontSize:"2rem",fontWeight:"bolder"}}>First Name:</span> {profile.adminFirstName}</p>
                            <p><span style={{fontSize:"2rem",fontWeight:"bolder"}}>Last Name: </span>{profile.adminLastName}</p>
                        
                            {/* <p>Email: {profile.adminEmail}</p> */}
                            <p><span style={{fontSize:"2rem",fontWeight:"bolder"}}>Password: </span>{profile.adminPassword}</p>
                            <p><span style={{fontSize:"2rem",fontWeight:"bolder"}}>Email: </span>{profile.adminEmail}</p>
                        </span>
                        <span>
                            <p><span style={{fontSize:"2rem",fontWeight:"bolder"}}>Bio: </span>this is bo.</p>
                        </span>
                    </section>
                    
                    <p className="company__name">Planet Music Store Admin</p>
                </section>
            </div>
        )}
        </>
    )
}

export default ProfilePanel



// <p>adminFirstName: {profile.adminFirstName}</p>
//                     <p>adminLastName: {profile.adminLastName}</p>
//                     <p>adminEmail: {profile.adminEmail}</p>
//                     <p>adminPassword: {profile.adminPassword}</p>
//                     <p>adminUserName: {profile.adminUserName}</p>