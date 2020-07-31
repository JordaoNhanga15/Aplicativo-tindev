import React, { useState, useEffect } from 'react'
import './Css/modal.css'
import fb_icon from '../pages/img/facebook_f_filled_50px.png'
import twitter_icon from '../pages/img/twitter_26px.png'
import linkedin_icon from '../pages/img/linkedin_2_filled_50px.png'
import github from '../pages/img/github_30px.png'
import edit_user from '../pages/img/edit_user_26px.png'
import edit_user_progress from '../pages/img/edit_property_32px.png'
//import pic from '../pages/img/ji.jpg'
import api from '../services/api'



export default function Modal(props){
    let logado=props.logado;
    // let value_user=document.querySelector('#user_name')
    // let value_name=document.querySelector('#lable_text')
    // let value_text=document.querySelector('#text_bioo')
    const [value_user, SetValue_user]=useState('');
    const [value_name, SetValue_name]=useState(''); 
    const [value_text, SetValue_text]=useState('');
    const [LogUse,setLoguser]=useState('')
    
    let dados_save={
        id:logado,
        user:value_user,
        name:value_name,
        bio:value_text
    }
    async function handleSubmit(eve){
        eve.preventDefault();
        console.log(dados_save.user)
       await api.post('/devs/:devId:name:bio:user/',null,{
                headers:{
                    user:logado,
                    namee:dados_save.name,
                    biog:dados_save.bio,
                    //nam_user:dados_save.user
                }
            })
    }

    
    function textarea(){
        let btn_text=document.querySelector('#btnn_id')
        let img_edit_user=document.querySelector('#edit_user')
        let from_edit=document.querySelector('#form_edit')
        let text_area=document.querySelector('#text_bioo')
        let lable_text=document.querySelector('#lable_text')
        //let user_namee=document.querySelector('#user_name')
        
        
       if(from_edit.classList.contains('edit')){
        img_edit_user.setAttribute('src',`${edit_user}`)
        btn_text.style.display='none'
        text_area.style.opacity=.5;
        text_area.setAttribute('disabled','true')
        lable_text.setAttribute('disabled','true')
        
        //user_namee.setAttribute('disabled','true')
        from_edit.classList.remove('edit')
       }
       else{
        img_edit_user.setAttribute('src',`${edit_user_progress}`)
        lable_text.removeAttribute('disabled')
        //user_namee.removeAttribute('disabled')
        btn_text.style.display='flex'
        text_area.style.opacity=1;
        text_area.removeAttribute('disabled')
        from_edit.classList.add('edit')
       }
    }
    useEffect(()=>{
      (async function logUser(win,doc){
        const response= await api.get('/query',{headers:{
            user:logado,
        }})
        console.log(response.data)
        setLoguser(response.data)
        })(window,document)
    },[logado])
    return(
        <div className="modal" id="modale" >
    <div className="modal_">
        <div className="jj">

        </div>
        
        <a href="#ul" className="modal__close">&times; </a>
        
     <div className="sss">
         
        
         <div className="img">
             <div className="edit_icon">
                 <img src={edit_user} alt="" className="edit_" id="edit_user" onClick={()=>textarea()}/>
             </div>
             <div className="pict">
            <img src={LogUse.avatar} alt="" className="pic"/>
            </div>  
         </div>
         <form className="text" id="form_edit" onSubmit={(eve)=>handleSubmit(eve)}>
             <div className="text_h2">
                 <div className="label">  
                 <input className="label1" id="lable_text" type="text" value={value_name} onChange={(e)=> SetValue_name(e.target.value)} placeholder={LogUse.name} disabled/>  
                 <input type="text" value={value_user} placeholder={LogUse.user} disabled className="user_name" onChange={(e)=> SetValue_user(e.target.value)} id="user_name"/></div>
                 
      
        </div>
        <div className="text_p">
    <textarea id="text_bioo"  disabled placeholder={LogUse.bio} value={value_text} onChange={(e)=>SetValue_text(e.target.value)}></textarea>
      
        </div>
        <div className="btn_text_" id="btn_text"> <input type="submit" value="salvar" className="btnn" id="btnn_id" ></input> </div>
       
        </form>
        <div className="icons">
            <a href={`https://facebook.com/${LogUse.name}`} className="icon"><img src={fb_icon} alt=""/></a>
            <a href={`https://twitter.com/${LogUse.name}`} className="icon"><img src={twitter_icon} alt=""/></a>
            <a href={`https://linkedin.com/${LogUse.name}`}className="icon"><img src={linkedin_icon} alt=""/></a>
            <a href={`https://github.com/${LogUse.user}`} className="icon"><img src={github} alt=""/></a>
            </div>
     </div>
    </div>
</div>
    )
}