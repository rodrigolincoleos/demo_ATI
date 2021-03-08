import React, { Component, useState, useEffect } from "react";
import Axios from 'axios'

import '../Assets/CSS/Log.css';

function Log() {



    const [userName, setuserName] = useState('');
    const [password, setpassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');




    const submitLogin = () => {

        Axios.post('http://localhost:3001/log', {
            userName: userName,
            password: password

        }).then((response) => {

            if (response.data.message) {

                setLoginStatus(response.data.message)

            } else {

                setLoginStatus(response.data[0].User)

            }


        })

    };


    return (
        <div id='main'>

            <div id='mainlog'>

                <input type='text' name='user' placeholder='Usuario' onChange={(e) => {

                    setuserName(e.target.value)

                }} />


                <input type='password' name='password' placeholder='password' onChange={(e) => {

                    setpassword(e.target.value)

                }} />


                <button type='submit' onClick={submitLogin}>Log</button>

                <h1>{loginStatus}</h1>


            </div>

        </div>
    );
}

export default Log