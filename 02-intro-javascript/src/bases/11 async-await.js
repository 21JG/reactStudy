

// const getImagenPromesa=()=> new Promise( resolve => resolve('https://ejnfjkv.com'))

// getImagenPromesa().then( console.log );

const getImagen =async() => {
    try{
    const apiKey = 'sC0uFZNsVkuJcYiTvK9ucGmRLH8hxInw';
    const respuesta = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    const {data} = await respuesta.json();

    
    
    const { url } = data.images.original;
        
    console.log(url)
            
    const img = document.createElement('img');
    img.src =url;
    document.body.append( img );
    }catch(error){
        //Msnejo del error
        console.error(error)
    }


}

// //console.log(getImagen());
getImagen();



