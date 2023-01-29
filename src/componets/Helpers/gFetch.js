let productos = [
   { id: '1', categoria: 'fuego', name: 'charmander', price:'200', foto: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-blue-version/d/d4/Charmander.gif'},
   { id: '2', categoria: 'agua',    name: 'squirtle',price:'100', foto: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png'},
   { id: '3', categoria: 'electricidad', name: 'pikachu', price:'200', foto: 'https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/6420b-pikachu-sentado-png.png?resize=450%2C450&ssl=1'},
   { id: '4', categoria: 'planta', name: 'bulbasar', price:'200', foto: 'https://www.enter.co/wp-content/uploads/2016/02/bulbasaur-1024x768.png'},
   { id: '5', categoria: 'fuego', name: 'vulpix', price:'200', foto: 'https://os-cdn.ec-ffmt.com/gl/pokemon/dedicate/pokedex/37.png'},
   { id: '6', categoria: 'agua', name: 'totodile', price:'200', foto: 'https://i.pinimg.com/736x/6f/f3/89/6ff3897d88f1c3666f3508a6d5adb991.jpg'},
   { id: '7', categoria: 'electricidad', name: 'pachirisu', price:'200', foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/417.png'},
   { id: '8', categoria: 'agua',    name: 'mudkip',price:'100', foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/258.png'},
   { id: '9', categoria: 'electricidad', name: 'luxray', price:'200', foto: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/403.png'},
   { id: '10', categoria: 'planta', name: 'sprigatito', price:'200', foto: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/e/eb/latest/20220227154237/Sprigatito.png/800px-Sprigatito.png'},
   { id: '11', categoria: 'fuego', name: 'growlithe', price:'200', foto: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/bb/latest/20211210200407/Growlithe.png/1200px-Growlithe.png'},
   { id: '12', categoria: 'planta', name: 'chikorita', price:'200', foto: 'https://i.pinimg.com/originals/84/25/76/842576708d43afb020ecc62e46ae8c01.png'},


]



export const gFetch = (id)=>{
    return new Promise(( resolve, reject)=>{
        setTimeout(()=>{
            resolve(id ? productos.find(prod => prod.id == id) : productos)
        },1000)
    })
}