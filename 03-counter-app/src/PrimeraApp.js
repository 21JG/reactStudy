import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const PrimeraApp =({ voy,sub}) =>{
    
    const emer ='camilo campeon';

   
    
//console.log(props);

    return( 
    //otro tipo de fragemtn 
    
        // <div>
    // <Fragment>
        <>
    {/* <pre> { JSON.stringify( emer, null, 3) } </pre> */}
    {/* <h1>{emer}</h1> */}
    <h1> {voy} </h1>
    <p>{sub}</p>
    
        </>
    );
    // </Fragment> 
// </div>
// otro tipo de fragment 

    
}
//no se pq pero no puede Prop sino que prop
PrimeraApp.propTypes = {
    voy:PropTypes.string.isRequired,
    amo:PropTypes.number

}
PrimeraApp.defaultProps = {
    sub:'soy un verraco'

}

export default PrimeraApp;