//  //Objetos JavaScript

// let Alvaro = {

//     nombre : "Alvaro",
//     edad : 29,
//     ciudad : "Almería",
//     hobbies : {
//         hobbie1 : "Videojuegos",
//         hobbie2 : "Lectura",
//         hobbie3 : "Programar"
//     }
// }

// let Paula = {

//     nombre : "Paula",
//     edad : 29,
//     ciudad : "Ontinyent",
//     hobbies : {
//         hobbie1 : "Puzzles",
//         hobbie2 : "Bailar Folk",
//         hobbie3 : "Programar"
//     }
// }

// let Ruben = {
//     nombre : "Ruben",
//     edad : 41,
//     ciudad: "Vilamarxant",
//     hobbies : {
//         hobbie1: "Tenis",
//         hobbie2: "Trail Running",
//         hobbie3: "Programar"
//     }
// }

// let cartelera = {
//     pelicula1 : {
//         titulo : "Lo que el viento se llevó",
//         edad : 13
//     },
//     pelicula2 : {
//         titulo : "Star Wars",
//         edad : 7
//     },
//     pelicula3 : {
//         titulo : "Pulp Fiction",
//         edad : 18
//     }
// }

// if(Ruben.edad >= cartelera.pelicula1.edad){
//     console.log("Ruben si puede ver ", cartelera.pelicula1.titulo);
// }

// let resultadoTernaria = (Ruben.edad >= cartelera.pelicula1.edad) ? "Ruben si puede" : "Ruben no puede";

// console.log(resultadoTernaria);

// //ALGO UTIL

// //ARRAY DE OBJETOS

// let videojuegos = [
//     {
//         titulo: ["God of War", "Dios de la guerra", "Kratos se enfada"],
//         plataforma : "Ps2"
//     },
//     {
//         titulo: ["Last of us", "Cillit bang"],
//         plataforma : "PS3"
//     },
//     {
//         titulo: ["Dark Souls", "Almas Oscuras", "Has muerto"],
//         plataforma: "PC"
//     },
//     {
//         titulo: ["Quake"],
//         plataforma: "PC"
//     },
//     {
//         titulo: ["Sonic 2", "Erizo", "Tails"],
//         plataforma: "Megadrive"
//     }
// ];


// let juego = prompt("Dime a que juego quieres jugar");

// for(let i =0 ; i < videojuegos.length; i++){

//     for(let x = 0; x < videojuegos[i].titulo.length; x++){

//         if(juego === videojuegos[i].titulo[x]){
//             console.log(`Si lo tenemos disponible, para ${videojuegos[i].plataforma}`);
//         };

//     }
// }

//Version ILKO PRO

// let juego = prompt("Dime a que juego quieres jugar");
// let lotenemos = false;
// let i = 0;
// while (lotenemos == false && i < videojuegos.length) {
//     lotenemos = (juego == videojuegos[i].titulo) ? true : false;
//     i++
// }
// if (lotenemos) {
//     console.log(`El video juego que buscas si lo tenemos disponible para ${videojuegos[i].plataforma}`);
// } else {
//     console.log("El video juego que buscas no lo tenemos, disculpe las molestias"); 
// }

// for(let i = 1; i <= 10; i++){

//     console.log(i);
// }



// let burriana = [
//     {
//         matricula: "3347GHL",
//         hora_inicial_estacionamiento : "09:00",
//         hora_fin_ticket: "11:00",
//         importe: 1.70,
//         multado: false,
//         tarifa: "zona azul",
//         direccion: "calle burriana",
//         activo: true
//     },
//     {
//         matricula: "3347PNI",
//         hora_inicial_estacionamiento : "10:00",
//         hora_fin_ticket: "11:45",
//         importe: 1.40,
//         multado: false,
//         tarifa: "zona azul",
//         direccion: "calle burriana",
//         activo: true
//     }

// ]