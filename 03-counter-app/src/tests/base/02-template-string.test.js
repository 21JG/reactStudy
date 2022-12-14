import'@testing-library/jest-dom';

import { getSaludo } from '../../base-pruebas/02-template-string';


    describe('Pruebas en 02-template-string.js', () => { 
        
        test('getSaludo prueba en el metodo debe retornar Fernando',() =>{

            const nombre = 'Fernando';

            const saludo =  getSaludo( nombre );

            // console.log(saludo).toBe('Hola' + nombre + '!');

            expect( saludo ).toBe('Hola ' + nombre + '!');

        })
        //  getSaludo debe de retornar Hola Carlos ! si no hay argumento en nombre
        
        test('etSaludo debe de retornar Hola Carlos ! si no hay argumento en nombre', () => {  
        
            const saludo = getSaludo();
            expect( saludo ).toBe( 'Hola Carlos!');
        
        })

     })