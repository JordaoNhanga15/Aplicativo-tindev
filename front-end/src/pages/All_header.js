import React from 'react'


import Main from './Main'
import Header from './header'
import Modal from './modal'

export default function All({history , match}){
    
    return(
        <div className="header_container" id="header_contt">
            <Modal his={history} logado={match.params.id}/>
            <Header logado={match.params.id} />
            <Main  his={history} logado={match.params.id} /> 
        </div>
       
    )
}