const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const  cantidadCarrito = document.getElementById("cantidadCarrito");

const productos=[
    {
        id: 1,
        nombre: "Agenda Semanal Simple",
        precio: 3800,
        img: "images/agendasemanal.jpg",
        cantidad: 1 
    },
    {
        id: 2,
        nombre: "Agenda Semanal con horarios",
        precio: 4000,
        img: "images/agenda_semanal_horario.jpeg",
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Agenda de Turnos",
        precio: 4000,
        img: "images/agenda_turnos.jpeg",
        cantidad:1 
    },
    {
        id: 4,
        nombre: "Agenda Emprendedora",
        precio: 3800,
        img: "images/emprendedora1.jpeg",
        cantidad: 1
    },
    { 
        id: 5,
        nombre: "Agenda Diaria",
        precio: 6000,
        img: "images/agenda_diaria.jpg",
        cantidad: 1
    },
    {
        id: 6,
        nombre: "Cuaderno pediátrico",
        precio: 3500,
        img: "images/cuadernopediatrico.jpeg",
        cantidad: 1 
    },
    {
        id: 7,
        nombre: "Agenda Universitaria",
        precio: 4000,
        img: "images/agendasemanal.jpg",
        cantidad: 1
    },
    {
        id: 8,
        nombre: "Agenda Docente",
        precio: 4000,
        img: "images/agendasemanal.jpg",
        cantidad: 1 
    },
    {
        id: 9,
        nombre: "Planners Imantados",
        precio: 2500,
        img: "images/plannerhorarios_marcador.jpg",
        cantidad: 1 
    },
    {
        id: 10,
        nombre: "Recetarios",
        precio: 3500,
        img: "images/recetario.jpeg",
        cantidad: 1 
    },
    {
        id: 11,
        nombre: "Juego de la memoria",
        precio: 2500,
        img: "images/juego_memoria2.jpg",
        cantidad: 1 
    }
   
];
let carrito = [];

// const shopContent = document.getElementById("shopContent");
// const verCarrito = document.getElementById("verCarrito");
// const modalContainer = document.getElementById("modalContainer");
// const showAlert = document.getElementById("showAlert");
// const cantidadCarrito = document.getElementById("cantidadCarrito");

// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// const getProducts = async()=> {
//     const response = await fetch("productos.json");
//     const productos = await response.json();
//     console.log(productos);
// };

// getProducts();

// let seleccion = prompt("Hola! desea comprar algun producto?(si o no)")
// while(seleccion != "si" && seleccion != "no"){
//     alert("Por favor ingrese si o no")
//     seleccion = promp("Hola, desea comprar algo?")
// }

// if(seleccion == "si"){
//     alert("a continuacion una lista de nuestros productos")
//     let todolosProductos = productos.map((productos)=> productos.nombre + " " + productos.precio +"$");
//     alert (todolosProductos.join("-"))
// }else if(seleccion == "no"){
//     alert("Gracias por pasar por nuestra pagina");
// }

productos.forEach((product)=>{
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
    <img src="${product.img}">
    <h3 class="seccion-texto-card">${product.nombre}</h3>
    <p class="price">${product.precio} $</p>
    `;
    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "Comprar";

    content.append(comprar);

    comprar.addEventListener("click", ()=>{
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        
        if(repeat){
            carrito.map((prod) =>{
                if(prod.id === product.id){
                    prod.cantidad++;
                }
            });
        }else{

        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        })};
        console.log(carrito);
        carritoCounter();
    })
})

