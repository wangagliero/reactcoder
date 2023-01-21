let productos = [
   { id: '1', categoria: 'fuego', name: 'charmander', price:'200', foto: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/d/d4/Charmander.gif'},
   { id: '2', categoria: 'agua',    name: 'squirtle',price:'100', foto: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png'},
   { id: '4', categoria: 'electricidad', name: 'pikachu', price:'200', foto: 'https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/6420b-pikachu-sentado-png.png?resize=450%2C450&ssl=1'},
   { id: '3', categoria: 'tierra', name: 'bulbasar', price:'200', foto: 'https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/6420b-pikachu-sentado-png.png?resize=450%2C450&ssl=1'},
   { id: '5', categoria: 'electricidad', name: 'pikachu', price:'200', foto: 'https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/6420b-pikachu-sentado-png.png?resize=450%2C450&ssl=1'},
   { id: '6', categoria: 'tierra', name: 'bulbasar', price:'200', foto: 'https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/6420b-pikachu-sentado-png.png?resize=450%2C450&ssl=1'},


]



export const gFetch = ()=>{
    return new Promise(( resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos)
        },3000)
    })
}