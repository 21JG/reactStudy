import { getHeroId } from './bases/08 imp-exp'



// const promesa= new Promise((resolve,reject) => {

//         setTimeout(() => {
//             //console.log('2 segundos later')
//             //importen el horeo
            
            
//                 const proc1 = getHeroId(1);

//             // resolve(proc1 );
//                 resolve(proc1);
//                 //reject('no se encontro el heroe')   ;  

        
//         }, 1000 );
// });






// promesa.then( ( heroe) =>{
//     console.log('Ahi esta su heroe', heroe)
// })
// .catch(error => console.warn(error));

const getHeroIdAsync = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
                    //console.log('2 segundos later')
                    //importen el horeo
                    
                    
                        const proc1 = getHeroId(id);
                        if( proc1 ) {
                    // resolve(proc1 );
                        resolve(proc1);
                    }else{
                        reject('no se encontro nada de heroes'); }
                        //reject('no se encontro el heroe')   ;  
                            
                
                }, 1000 );

    });
}

getHeroIdAsync(3)
    //.then( heroe => console.log('Su hero es ',heroe))
    .then(console.log)
    // .catch( error => console.warn(error))
    .catch(console.warn);