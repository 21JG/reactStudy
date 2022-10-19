import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const CounterApp =({ value }) =>{
    
    // handle add
    const handleAdd =(e) => {
        console.log(e)

        // return ()=> console.log('boton Jzrodn');
    }

   
    
//console.log(props);

    return( 
    

        <>

        <h1>CounterApp</h1>
        <h2> { value } </h2>
        

        {/* <button onClick={ function() {console.log('No mas')} }> +3 </button> */}
        {/* <button onClick={()=>{ console.log(1) }}>+1</button> */}

        {/* <button onClick={(e)=>{ console.log(e) }}>+1</button> */}
        {/* <button onClick={(e)=>{ handleAdd(e)}}>+1</button> */}
        {/* <button onClick={ handleAdd() }>+1</button> */}
        <button onClick={ handleAdd }>+1</button>

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



    