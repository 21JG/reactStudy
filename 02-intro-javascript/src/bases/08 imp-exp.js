//import{heroes} from './data/heroes';
// escribir imp
//import {heroes} from './data/heroes';
//escribir el nombre del archivo y de una CLASE 19


//import { heroes } from "./data/heroes";

// conseguir el id de cada heroe
//const getHeroId=(id)=>{
//    return heroes.find((heroe)=>{ . 
//        if (heroe.id==id){
//            return true;
//        }else{
//            return false
//        }
//    });
//}
//commit


//Mas FORMAS DE IMPORTAR

//import heroes from './data/heroes';
//4 import heroes,{ owners} from'./data/heroes';

//5import {heroes,owners} from'./data/heroes';

import heroes,{ owners} from'../data/heroes';

//console.log(owners);

//para quitar el if y ponerlo a verificar con el id;
//function getHeroId(id) {
//    return heroes.find((heroe) => heroe.id == id);
//}

//a este tambien le podemos quitar el return                        

export const getHeroId = (id) => heroes.find((heroe)=>heroe.id==id);



//console.log(getHeroId(1) );

//filter (para que aparezcan todas las opciones que cumplan)

export const getHeroOwner =(owner)=>{
return heroes.filter((heroe)=>heroe.owner==owner);
}

//const getHerosOwner = (owner) => heroes.filter((heroe)=>heroe.owner==owner);


//console.log(getHeroOwner("Marvel"));