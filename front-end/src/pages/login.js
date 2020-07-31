import React,{ useState } from 'react'
import './Css/Login.css'
import logo from '../pages/img/logo.svg'
import icone from '../pages/img/unlock_24px.png'
//import {logo,icone} from '../img'
import api from '../services/api'


export default function Login({history}){
    const [username, SetUsername]=useState('');
    //console.log(document.querySelector('#textBox').value)
  async  function handleSubmit(event){
      
        event.preventDefault()
        //console.log(username)
        const response = await api.post('/devs',{
            username,
        });
        //console.log(username)
        //console.log(response.data)
        const { _id  } = response.data.userExist;
        //console.log(name)
        //console.log(_id)
        history.push(`/dev/${_id}`)
    }

   

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
            <img src={logo} alt="Tindev"/>
            <input 
            id="textBox"
             placeholder="Ola digite o seu nome de github" 
             type="text" 
            value={username} 
            onChange={e=> SetUsername(e.target.value)}
            />
            <button>Enter <img src={icone} alt="" id="icon"/></button> 
            </form>
    </div>
    );
}