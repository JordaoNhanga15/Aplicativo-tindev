import React,{useEffect,useState} from 'react'
import './Css/Main.css'
//import logo from '../img/logo.svg'
import settings from '../pages/img/settings_26px.png'
import grid_cell from '../pages/img/grid_24px.png'
import grid_3 from '../pages/img/activity_grid_2_24px.png'
import dislike from '../pages/img/dislike.svg'
import like from '../pages/img/like.svg'
import api from '../services/api'

export default function Main(props){
    //console.log(props)
    let logado=props.logado;
    let history=props.his;
    const [Users,setUser]= useState([])
    const [Log,setLog] = useState('')
    
    //console.log(logado)
//console.log(history)

    function handSubmit(eve){   
        eve.preventDefault()
        history.push('/')
    }
    //handSubmit()
    async function Handlelike(logado){
        await api.post(`/devs/${logado}/likes`,null,{headers:{
            user:logado
        },
    })
    setUser(Users.filter(user=>user._id !== logado))
    }
    async function HandleDislike(logado){
        await api.post(`/devs/${logado}/likes`,null,{
            headers:{user:logado},
        })
        setUser(Users.filter(user=>user._id!==logado))
    }
/*
    async function btn(id){ 
    const response= await api.post('/query',null,{headers:{
        user:match.params.id
    }})
    return response;
    }
*/
    useEffect(()=>{
         (async function Logguser(win,doc){
            const response= await api.get('/query',{headers:{
                user:logado,
            }})
            //console.log(response.data)
            setLog(response.data)
        })(window,document)
    },[logado])

    useEffect(()=>{
        (async function loadUser(win,doc){
            
            const response = await api.get('/devs',{headers:{
                user:logado
            }
            })
            //console.log(response.data)
            setUser(response.data)
        })(window,document)
    },
    [logado])

    return(
        <div className="Main">
    <div className="header">
        <div className="header_a">
            <h2 className="text_header_a">Followers</h2>
            <div className="line"></div>
        </div>
        <div className="header_b">
            <div><img src={grid_cell} alt="" className="grid_" id="grid" onClick={(event)=>{
                 let grid=document.querySelector('#grid')
                 let ul=document.querySelector('#ul')
                 if(grid.classList.contains('grid_')){
                     ul.style.gridTemplateColumns="1fr 1fr "
                     grid.setAttribute('src',`${grid_3}`)
                     grid.classList.remove('grid_')
                     
                 }
                 else{
                     
                     ul.style.gridTemplateColumns="1fr 1fr 1fr"
                     grid.setAttribute('src',`${grid_cell}`)
                     grid.classList.add('grid_')
                 }
            }}/></div>
            <div><img src={settings} alt="settings" className="" id="settings"/></div>
            
        </div>
    </div>
    
    {Users.length>0 ? (
        <div className="Main_container">
        <ul id="ul">
        {Users.map(user=>(
            <li key={user._id}>
            <img src={user.avatar} alt=""/>
            <footer>
        <strong>{user.name}</strong>
        <p>{user.bio}</p>
            </footer>
    
        <div className="buttons" >
            <button type="button" onClick={()=>Handlelike(user._id)}>
                <img src={like} alt="" className="img_btn" />
            </button>
            <button type="button" onClick={()=>HandleDislike(user._id)}>
                <img src={dislike} alt="" className="img_btn" />
            </button>
        </div>
        </li>
        ))}
        

        </ul>
        </div>
    ):(<div>acabou :c</div>)
    }



    <form onSubmit={handSubmit}>
<button>Ola {Log.name}</button>
<img src={Log.avatar} alt={Log.name}/>
    </form>
    </div>

    )
}