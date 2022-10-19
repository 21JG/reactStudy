import React from "react";
import ReactDom from 'react-dom'
import PrimeraApp from './PrimeraApp' 
import CounterApp from "./CounterApp";
import './index.css'

//console.log('hola mundo');



// const saludo = <h1>Hola Mundo</h1>;

//console.log (saludo);

const divRoot = document.querySelector('#roote');

//console.log(divRoot);

// ReactDom.render( saludo,divRoot );
ReactDom.render( <PrimeraApp voy="hola David"/>,divRoot );

ReactDom.render( <CounterApp value={21} />,divRoot );