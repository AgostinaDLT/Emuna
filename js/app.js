const productos=[
    {
        id: 1,
        nombre: "Agenda Semanal Simple",
        precio: 3800,
        img: "images/agendasemanal.jpg" 
    },
    {
        id: 2,
        nombre: "Agenda Semanal con horarios",
        precio: 4000,
        img: "images/agendasemanal.jpg" 
    },
    {
        id: 3,
        nombre: "Agenda de Turnos",
        precio: 3800,
        img: "images/agendasemanal.jpg" 
    },
    {
        id: 4,
        nombre: "Agenda Emprendedora",
        precio: 3800,
        img: "images/agendasemanal.jpg" 
    },
    { 
        id: 5,
        nombre: "Agenda Diaria",
        precio: 2500,
        img: "images/agenda_diaria.jpg" 
    },
    {
        id: 6,
        nombre: "Cuaderno pediátrico",
        precio: 3800,
        img: "images/agendasemanal.jpg" 
    },
    {
        id: 7,
        nombre: "Agenda Universitaria",
        precio: 3800,
        img: "images/agendasemanal.jpg" 
    },
    {
        id: 8,
        nombre: "Agenda Docente",
        precio: 3800,
        img: "images/agendasemanal.jpg" 
    },
   
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