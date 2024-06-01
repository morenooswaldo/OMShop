//CATALOGO DE PRODUCTOS

const productos = [
    //ABRIGOS
    {
        id: "abrigo-01",
        titulo: "Abrigo 01",
        imagen: "./img/abrigos/01.jpg",
        categoria:{
            nombre:"Abrigos",
            id_categoria:"abrigos",
        },
        precio: 1000
    },
    {
        id: "abrigo-02",
        titulo: "Abrigo 02",
        imagen: "./img/abrigos/02.jpg",
        categoria:{
            nombre:"Abrigos",
            id_categoria:"abrigos",
        },
        precio: 1000
    },
    {
        id: "abrigo-03",
        titulo: "Abrigo 03",
        imagen: "./img/abrigos/03.jpg",
        categoria:{
            nombre:"Abrigos",
            id_categoria:"abrigos",
        },
        precio: 1000
    },
    {
        id: "abrigo-04",
        titulo: "Abrigo 04",
        imagen: "./img/abrigos/04.jpg",
        categoria:{
            nombre:"Abrigos",
            id_categoria:"abrigos",
        },
        precio: 1000
    },
    {
        id: "abrigo-05",
        titulo: "Abrigo 05",
        imagen: "./img/abrigos/05.jpg",
        categoria:{
            nombre:"Abrigos",
            id_categoria:"abrigos",
        },
        precio: 1000
    },

    //FRANELAS

    {
        id: "franela-01",
        titulo: "Franela 01",
        imagen: "./img/franelas/01.jpg",
        categoria:{
            nombre:"Franelas",
            id_categoria:"franelas",
        },
        precio: 1000
    },
    {
        id: "franela-02",
        titulo: "Franela 02",
        imagen: "./img/franelas/02.jpg",
        categoria:{
            nombre:"Franelas",
            id_categoria:"franelas",
        },
        precio: 1000
    },
    {
        id: "franela-03",
        titulo: "Franela 03",
        imagen: "./img/franelas/03.jpg",
        categoria:{
            nombre:"Franelas",
            id_categoria:"franelas",
        },
        precio: 1000
    },
    {
        id: "franela-04",
        titulo: "Franela 04",
        imagen: "./img/franelas/04.jpg",
        categoria:{
            nombre:"Franelas",
            id_categoria:"franelas",
        },
        precio: 1000
    },
    {
        id: "franela-05",
        titulo: "Franela 05",
        imagen: "./img/franelas/05.jpg",
        categoria:{
            nombre:"Franelas",
            id_categoria:"franelas",
        },
        precio: 1000
    },
    {
        id: "franela-06",
        titulo: "Franela 06",
        imagen: "./img/franelas/06.jpg",
        categoria:{
            nombre:"Franelas",
            id_categoria:"franelas",
        },
        precio: 1000
    },
    {
        id: "franela-07",
        titulo: "Franela 07",
        imagen: "./img/franelas/07.jpg",
        categoria:{
            nombre:"Franelas",
            id_categoria:"franelas",
        },
        precio: 1000
    },
    {
        id: "franela-08",
        titulo: "Franela 08",
        imagen: "./img/franelas/08.jpg",
        categoria:{
            nombre:"Franelas",
            id_categoria:"franelas",
        },
        precio: 1000
    },

    //PANTALONES

    {
        id: "pantalon-01",
        titulo: "Pantalon 01",
        imagen: "./img/pantalones/01.jpg",
        categoria:{
            nombre:"Pantalones",
            id_categoria:"pantalones",
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalon 02",
        imagen: "./img/pantalones/02.jpg",
        categoria:{
            nombre:"Pantalones",
            id_categoria:"pantalones",
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalon 03",
        imagen: "./img/pantalones/03.jpg",
        categoria:{
            nombre:"Pantalones",
            id_categoria:"pantalones",
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalon 04",
        imagen: "./img/pantalones/04.jpg",
        categoria:{
            nombre:"Pantalones",
            id_categoria:"pantalones",
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalon 05",
        imagen: "./img/pantalones/05.jpg",
        categoria:{
            nombre:"Pantalones",
            id_categoria:"pantalones",
        },
        precio: 1000
    },

];

//AQUI IMPORTAMOS TODAS LAS CLASES QUE SE NECESITAN MODIFICAR DEL HTML
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonAgregar = document.querySelectorAll(".producto-agregar");
const numero =  document.querySelector("#numero");


//FUNCION PARA AGREGAR PRODUCTOS AUTOMATICAMENTE
function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto =>{

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar"id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar(); //LLAMADO A FUNCION DE ACTUALIZAR BOTONES PARA QUE SE ACTUALICEN CUANDO SE CARGUEN LOS PRODUCTOS

}

cargarProductos(productos); //LLAMADO A FUNCIOND DE CARGAR PRODUCTOS EN PAGINA PRINCIPAL 


//FUNCION PARA FILTRAR POR CATEGORIA LOS PRODUCTOS
botonesCategorias.forEach(boton =>{
    boton.addEventListener("click",(e) => {
        
        botonesCategorias.forEach(boton => boton.classList.remove("active")); //CAMBIA EL RESALTADO DEL BOTON ACTIVO
        e.currentTarget.classList.add("active"); //RESALTA EL BOCON ACTIVO

        //CONDICION PARA QUE MUESTRE POR FILTRO DEPENDIENDO DEL ID
        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id_categoria === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id_categoria === e.currentTarget.id);
            cargarProductos(productosBoton);
        }else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos);
        }
        
    })

});



//FUNCION PARA ACTUALIZAR BOTONES CUANDO CARGUE LA PAGINA, PORQUE SE CREAN EN LA FUNCION DE CARGAR_PRODUCTOS
function actualizarBotonesAgregar(){
    botonAgregar = document.querySelectorAll(".producto-agregar");

    botonAgregar.forEach(boton =>{
        boton.addEventListener("click",agregarAlCarrito); //EVENTO PARA AGREGAR AL CARRITO USANDO LA FUNCION AGREGAR_AL_CARRITO
    })
}




let productosEnCarrito;

//IMPORTA EL ARCHIVO JSON CREADO Y LO TRAE Al ARCHIVO ACTUAL
let productosEnCarritoLocalStorage = localStorage.getItem("productos-en-carrito");


//CONDICION QUE EVALUA SI EL ARREGLO TIENE ELEMENTOS O SI ESTA VACIO PARA NO PERDER LO QUE ESTA GUARDADO EN MEMORIA
if(productosEnCarritoLocalStorage){
    productosEnCarrito = JSON.parse(productosEnCarritoLocalStorage);
    actualizarNumero();
}else {
    productosEnCarrito = []; //ARREGLO VACIO PARA ALMACENAR LOS PRODUCTOS QUE SE VAN A AGREGAR
}
  



function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id; //TRAE EL ID DEL PRODUCTO PARA SER UTILIZADO
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    //CONDICION VERIFICA SI EL PRODUCTO ESTA EN EL ARREGLO PARA SUMAR UNO MAS O SI ES UNO NUEVO 
    if(productosEnCarrito.some(producto => producto.id ===idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton); //VERIFICA POR INDICE SI EL ID DE PRODUCTO COINCIDE CON ID BOTON
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado); // AGREGA EL OBJETO AL ARREGLO 
    }
    
    actualizarNumero();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)); //TOMA EL ARREGLO Y CREA UN ARCHIVO JSON Y LO ALMACENA EN LA MEMORIA DEL EXPLORADOR
}



function actualizarNumero() {
    let nuevoNumero = productosEnCarrito.reduce((acc,producto) => acc+producto.cantidad,0); // SUMA CADA PRODUCTO QUE EXISTE EN EL ARREGLO
    numero.innerText = nuevoNumero;

}