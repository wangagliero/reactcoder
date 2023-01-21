let productos = [
   { id: '1', categoria: 'normal', name: 'hol', price:'200', foto: 'https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg'},
   { id: '2', categoria: 'nor',    name: 'hola',price:'100', foto: 'https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg'},
   { id: '4', categoria: 'normal', name: 'hol', price:'200', foto: 'https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg'},
   { id: '3', categoria: 'normal', name: 'hol', price:'200', foto: 'https://www.pokemon.com/static-assets/app/static3/img/og-default-image.jpeg'},
 


]

export const gFetch = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(productos)
        },3000)
    })
}