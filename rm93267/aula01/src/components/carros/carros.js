import React from 'react'
import carro from './img/carro.jpg'

export default function Carros(props){
    return(
        <>

        <img src={carro} width="100px"/>
            <ol>
                <li>Carro 1</li>
                <li>Carro 2</li>
                <li>Carro 3</li>
                <li>Carro 4</li>
                <li>Carro 5</li>
            </ol>
        </>
    )
}