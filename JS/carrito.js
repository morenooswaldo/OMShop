let productosEnCarrito = localStorage.getItem("productos-en-carrito"); //IMPORTA EL ARCHIVO JSON CREADO Y LO TRARE AL SIGUIENTE ARCHIVO
productosEnCarrito = JSON.parse(productosEnCarrito);

//AQUI IMPORTAMOS CON EL ID LO QUE SE NECESITA MODIFICAR DEL HTML (SI NO LO TIENE HAY QUE AGREGARLO)
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");


function cargarProductosCarrito(){
    if (productosEnCarrito && productosEnCarrito.length>0){
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
    
        
        contenedorCarritoProductos.innerHTML = "";
        
        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
            <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-titulo">
                <small>Titulo</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="carrito-producto-cantidad">
                <small>Cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
                <small>Precio</small>
                <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
                <small>Sub-total</small>
                <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            contenedorCarritoProductos.append(div);
    
        })
        
    
    }else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
    
    }

    actualizarBotonesEliminar();
    actualizarTotal();

}

cargarProductosCarrito();



//FUNCION PARA ACTUALIZAR BOTONES CUANDO CARGUE LA PAGINA
function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton =>{
        boton.addEventListener("click",eliminarDelCarrito); //EVENTO PARA ELIMINAR DELCARRITO USANDO LA FUNCION 
    })
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;  //TRAE EL ID DEL PRODUCTO PARA SER UTILIZADO EN EL BOTON
    console.log(idBoton);
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton); //DEVUELVE EL INDICE DEL PRODUCTO QUE COINCIDA CON EL ID BOTON Y ID PRODUCTO

    productosEnCarrito.splice(index,1); //ELIMINA EL PRODUCTO EN EL ARREGLO SEGUN EL INDICE
    cargarProductosCarrito(); //CARGAMOS LOS PRODUCTOS DE NUEVO EN EL CARRITO (LOS RESTANTES QUE NO FUERON ELIMINADOS)

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito)); //ACTUALIZAMOS EL LOCALSTORAGE PARA QUE SE GUARDEN LOS CAMBIOS DE PRODUCTOS ELIMINADOS

}




botonVaciar.addEventListener("click",vaciarCarrito);
function vaciarCarrito(){

productosEnCarrito.length= 0;
localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
cargarProductosCarrito();

}


function actualizarTotal(){

    const totalCalculado = productosEnCarrito.reduce((acc,producto) => acc + (producto.precio * producto.cantidad),0);
    total.innerText = `$${totalCalculado}`;
}