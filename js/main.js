// OBJETOS los objetos van con llaves. Los valores se definen con : y no con =

let Alvaro = {
    nombre : "Alvaro",
    edad : 29,
    ciudad : "Almería",
    hobbies : {
        hobbie1 : "Videojuegos",
        hobbie2 : "Leer",
        hobbie3 : "Programar",
    }
}


let Paula = {
    nombre : "Paula",
    edad : 29,
    ciudad : "Ontinyent",
    hobbies : {
        hobbie1 : "Puzzles",
        hobbie2 : "Bailar folklore",
        hobbie3 : "Programar",
    }
}


let Ruben = {
    nombre : "Ruben",
    edad : 41,
    ciudad : "Vilamarxant",
    hobbies : {
        hobbie1 : "Tenis",
        hobbie2 : "Trail Running",
        hobbie3 : "Programar",
    }
}


console.log(Alvaro.hobbies.hobbie1);

if(Alvaro.ciudad === VideoPlaybackQuality.ciudad){

}




// Array de objetos





let juego = prompt("Dime a que juego quieres jugar")

for(let i = 0; i < videojuegos.length; i++){

    if(juego === videojuegos[i].titulo){
        console.log(`Esta disponible para ${videojuegos[i].plataforma}`)
    }
};