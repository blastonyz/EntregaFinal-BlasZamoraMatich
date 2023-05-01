export const productos = [
    {id:'1',nombre:'Bordado Premium',precio: 2000,categoria: 'Belleza',img:'/images/bordado.png',descripcion:'descripcion bordado',checkout:'https://go.hotmart.com/G76231636V?ap=46c5',stock:10},
    {id:'2', nombre:'Maquillaje', precio: 3590,categoria: 'Belleza',img:'/images/maquillaje.png',  descripcion:'descripcion maquillaje',checkout:'https://go.hotmart.com/Y76231662U',stock:10},
    {id:'3', nombre:'Master en ojos', precio: 11965,categoria: 'Belleza',img:'/images/master.png',  descripcion:'descripcion master',checkout:'https://go.hotmart.com/Q77038680A?ap=10b6',stock:10},
    {id:'4', nombre:'Guía de Belleza Natural', precio: 2392,categoria: 'Belleza',img:'/images/guia.png',  descripcion:'descripcion Guia de Belleza',checkout:'https://go.hotmart.com/G76231572H',stock:10},
    {id:'5', nombre:'Pestañas', precio: 2392,categoria: 'Belleza',img:'/images/pestanias.png',  descripcion:'descripcion pestanias',checkout:'https://go.hotmart.com/V78368382C',stock:10},
    {id:'6', nombre:'Uñas Esculpidas', precio: 4787,categoria: 'Belleza',img:'/images/esculpidas.png',  descripcion:'descripcion esculpidas',checkout:'https://go.hotmart.com/Y76231510S',stock:10},
    {id:'7', nombre:'Barberia', precio: 5264,categoria: 'oficios',img:'/images/barberia.png',  descripcion:'descripcion barberia',checkout:'https://go.hotmart.com/P82254341K?ap=c42d',stock:10},
    {id:'8', nombre:'Arreglos Florales', precio: 5264,categoria: 'oficios',img:'/images/arreglosflorales.png',  descripcion:'descripcion arreglos',checkout:'https://go.hotmart.com/Q82254535O?ap=3da9',stock:10},
    {id:'9', nombre:'90 Cursos de Oficios', precio: 5264,categoria: 'oficios',img:'/images/90cursos.png',  descripcion:'descripcion 90 cursos',checkout:'https://go.hotmart.com/B82254602D',stock:10},
    {id:'10', nombre:'Téncico de Motos y Bicicletas', precio: 10765,categoria: 'oficios',img:'/images/tecnicomyb.png',  descripcion:'descripcion tencicomyb',checkout:'https://go.hotmart.com/R82254678G?ap=1352',stock:10},
    {id:'11', nombre:'Reparacion de Celulares', precio: 10765,categoria: 'oficios',img:'/images/reparacioncel.png',  descripcion:'descripcion reparacioncel',checkout: 'https://pay.hotmart.com/G68148038X?bid=1682394612247',stock:10},
    {id:'12', nombre:'Python', precio: 10765,categoria: 'Tecnologia',img:'/images/python.png',  descripcion:'descripcion python',checkout: 'https://go.hotmart.com/A78344335H?ap=aa10',stock:10},
    {id:'13', nombre:'JavaScript', precio: 1437,categoria: 'Tecnologia',img:'/images/JavaScript.png',  descripcion:'descripcion JavaScript',checkout: 'https://go.hotmart.com/S82255143C',stock:10},
    {id:'14', nombre:'AutoPublicador', precio: 10765,categoria: 'Tecnologia',img:'/images/AutoPublicador.png',  descripcion:'descripcion AutoPublicador',checkout: 'https://go.hotmart.com/W82255121T',stock:10},
]

export const getProductos = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 500);
    })
}

export const getProductosId = (ProductId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(prod=>prod.id === ProductId))
        }, 500);
    })
}

export const getProductosCategoria = (categoriaId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos.find(produc=>produc.categoria === categoriaId))
        }, 500);
    })
}