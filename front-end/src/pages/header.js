import React, { useState,useEffect} from 'react'
import './Css/Header.css'
//import pic from '../pages/img/ji.jpg'
import iconee from '../pages/img/menu_32px.png'
import close from '../pages/img/multiply_26px.png'
import circle_ from '../pages/img/circled_chevron_right_filled_50px.png'
import circle_1 from '../pages/img/circled_right_30px.png'
import left from '../pages/img/back_26px.png'
import right from '../pages/img/chevron_right_26px.png'
import api from '../services/api'

export default function Header(props){
   let logado=props.logado
   
     const [log_use,set_loguse]=useState('')

           useEffect(()=>{
            (async function logUser(win,doc){
              const response= await api.get('/query',{headers:{
                  user:logado,
              }})
              //console.log(response.data)
              set_loguse(response.data)
              })(window,document)
          },[logado])

    return( 
        <div className="container">
            
            <nav className="nav_container">
            <ul className="ul">
                <nav className="nav_list" id="nav_list">
                
                    <li><a href="s">Home</a></li>
                    <li><a href="s">Services</a></li>
                    <li><a href="s">About</a></li>
                    
                </nav>
                <section className="profile">
    <a href="#modale" className="info_profile"> <img src={log_use.avatar} alt="" className="pic_profile" /> <small className="name_profile">{`@${log_use.user}`}</small></a>
                    <div> <img src={iconee} alt="" className="icone" id="icone" onClick={(event)=>{
                        let icone=document.querySelector('#icone')
                        let nav=document.querySelector('#nav_list')
                        if(nav.classList.contains('van')){
                            nav.classList.remove('van')
                            icone.setAttribute('src',`${iconee}`)
                        }
                        else{
                            nav.classList.add('van')
                            icone.setAttribute('src',`${close}`)
                        }
                    }}/> </div>
                </section>
                
            </ul>
            </nav>
            <section className="banner">
                <div className="banner_conta">
                <div className="icon_banner"><a href="e"><img src={left} alt="" /></a></div>
                <div className="aside">
                <aside>
                <h1>Polar technologies & Tindev</h1>
                <p>An all one app which machines on chat in an efficient way so that you collaborate with friends easily</p>
                <div className="btn"> <a href="a" className="articl" id="article"  onMouseEnter={(event)=>{let circle=document.querySelector('#circle') 
                circle.setAttribute('src',`${circle_1}`)}} onMouseLeave={(event)=>{let circle=document.querySelector('#circle')
                circle.setAttribute('src',`${circle_}`)}}> <span></span> <span></span> <span></span> <span></span>More <img src={circle_} alt="" id="circle"/> </a>  </div>
                </aside>
                <aside >
                <img src="" alt="" className="banner_img"/>
                </aside>
                </div>
                <div className="icon_banner"><a href="e"><img src={right} alt="" /></a></div>
                </div>
                <div className="radios">
                    <div className="radio"></div>
                    <div className="radio"></div>
                    <div className="radio"></div>
                    <div className="radio"></div>
                </div>
            </section>
        </div>
    )
}