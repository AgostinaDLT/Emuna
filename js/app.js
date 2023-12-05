const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const  cantidadCarrito = document.getElementById("cantidadCarrito");

const productos=[
    {
        id: 1,
        nombre: "Agenda Semanal Simple",
        precio: 3800,
        img: "images/catalogo/semanal.jpeg",
        cantidad: 1 
    },
    {
        id: 2,
        nombre: "Agenda Semanal con horarios",
        precio: 4000,
        img: "images/catalogo/semanal_horarios.jpeg",
        cantidad: 1
    },
    {
        id: 3,
        nombre: "Agenda de Turnos Perpetua",
        precio: 4000,
        img: "images/catalogo/turnos.jpeg",
        cantidad:1 
    },
    {
        id: 4,
        nombre: "Agenda Emprendedora",
        precio: 3800,
        img: "images/catalogo/emprendedora.jpeg",
        cantidad: 1
    },
    { 
        id: 5,
        nombre: "Agenda Diaria",
        precio: 6000,
        img: "images/catalogo/agenda_diaria.jpg",
        cantidad: 1
    },
    {
        id: 6,
        nombre: "Cuaderno pediátrico",
        precio: 3500,
        img: "images/catalogo/pediatrica.jpeg",
        cantidad: 1 
    },
    {
        id: 7,
        nombre: "Agenda Universitaria",
        precio: 4000,
        img: "images/catalogo/universitaria1.jpeg",
        cantidad: 1
    },
    {
        id: 8,
        nombre: "Agenda Docente",
        precio: 4000,
        img: "images/catalogo/agendasemanal.jpg",
        cantidad: 1 
    },
    {
        id: 9,
        nombre: "Planners Imantados",
        precio: 2500,
        img: "images/catalogo/planner.jpeg",
        cantidad: 1 
    },
    {
        id: 10,
        nombre: "Recetarios",
        precio: 3500,
        img: "images/catalogo/recetario.jpeg",
        cantidad: 1 
    },
    {
        id: 11,
        nombre: "Juegos de la memoria",
        precio: 2500,
        img: "images/catalogo/juego_memoria2.jpg",
        cantidad: 1 
    },
    {
        id: 12,
        nombre: "Llaveros-block de notas",
        precio: 700,
        img: "images/catalogo/llaveros.jpeg",
        cantidad: 1 
    },
    {
        id: 13,
        nombre: "Anotador (14x15cm)",
        precio: 1500,
        img: "images/catalogo/anotadores.jpeg",
        cantidad: 1
    },
    {
        id: 14,
        nombre: "Anotador ecológico (48hjs)",
        precio: 2000,
        img: "images/catalogo/anotadores_eco.jpeg",
        cantidad: 1
    },
    {
        id: 15,
        nombre: "Calendario imantado 2024-chico",
        precio: 300,
        img: "images/catalogo/calendario_chico.jpeg",
        cantidad: 1
    },
    {
        id: 16,
        nombre: "Calendario imantado 2024-mediano",
        precio: 600,
        img: "images/catalogo/calendario_mediano.jpeg",
        cantidad: 1
    },
    {
        id: 17,
        nombre: "Calendario imantado 2024-grande",
        precio: 900,
        img: "images/catalogo/calendario_grande.jpeg",
        cantidad: 1
    },
    {
        id: 18,
        nombre: "Cuaderno liso (80hjs)",
        precio: 2500,
        img: "images/catalogo/lisa.jpeg",
        cantidad: 1
    },
    {
        id: 19,
        nombre: "Cuaderno rayado (80hjs)",
        precio: 3500,
        img: "images/catalogo/rayado.jpeg",
        cantidad: 1
    },
    {
        id: 20,
        nombre: "Librito para colorear A5",
        precio: 500,
        img: "images/catalogo/libritopintar_a5.jpeg",
        cantidad: 1
    },
    {
        id: 21,
        nombre: "Librito para colorear A6",
        precio: 250,
        img: "images/catalogo/libritopintar_a6.jpeg",
        cantidad: 1
    },
    {
        id: 22,
        nombre: "Libritos Souvenir A6x20Un.",
        precio: 5000,
        img: "images/catalogo/souvenir.jpeg",
        cantidad: 1
    },
    {
        id: 23,
        nombre: "Planner imantado+marcador",
        precio: 3000,
        img: "images/catalogo/planner_marcador.jpg",
        cantidad: 1
    },
    {
        id: 24,
        nombre: "Block de notas",
        precio: 900,
        img: "images/catalogo/blocknotas.jpeg",
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

