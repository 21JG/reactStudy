import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp =({ value }) =>{

    const [ counter,setHunter ]  =useState(value);

    // console.log( nombre,setNombre);
    
    // handle add
    const handleAdd =() => {
        // console.log(e)
// no se puede usar counter ++ no funciona asi porque no se puede cambiar el vlr de una constante
        setHunter( counter + 2); 

// ahora de otra manera de desarrollar el set Hunter
        // setHunter( (j)=>j+0.5 );
        // hay veces que va a ser de esta manera^^^^linea de arriba^^^^

        // return ()=> console.log('boton Jzrodn');
    }    
    const handleSubstract =() =>{
            setHunter(counter-1);
    }
    const handleReset =() =>{
            setHunter(value);
    }
    
    
    // const[ subcounter,setSubHunter ] = useState(useState);
    // const handleSubstract =() =>{
    //     setSubHunter(subcounter-1);
    // }
    // const[ countero,setResetHunter ] = useState(useState);
    // const handleReset =() =>{
    //     setResetHunter(countero=0);
    // }

   
    
//console.log(props);

    return( 
    

        <>

        <h1>Hola Fede y Julisn</h1>
        <h2> { counter } </h2>
        

        {/* <button onClick={ function() {console.log('No mas')} }> +3 </button> */}
        {/* <button onClick={()=>{ console.log(1) }}>+1</button> */}

        {/* <button onClick={(e)=>{ console.log(e) }}>+1</button> */}
        {/* <button onClick={(e)=>{ handleAdd(e)}}>+1</button> */}
        {/* <button onClick={ handleAdd() }>+1</button> */}
        <button onClick={ handleAdd }>+2</button>
        <button onClick={handleReset } > Reset </button>
        <button onClick={ handleSubstract } > -1 </button>

        </>
    );
    
    
}
//no se pq pero no puede Prop sino que prop
CounterApp.propTypes = {
    value:PropTypes.number,
   

}
CounterApp.defaultProps = {
    sub:'soy un mk'

}

export default CounterApp;

// index

// import CounterApp from "./CounterApp";
// 
// ReactDom.render( <CounterApp value={21} />,divRoot );



    