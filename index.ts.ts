import { Cine } from "./cine";
import { Pelicula } from "./Pelicula";
import { Cliente } from "./cliente";
 
const cine: Cine = Cine.getInstance();
//Crear peliculas
const pelicula1: Pelicula = new Pelicula('John Wick 4');
const pelicula2: Pelicula = new Pelicula('Aladdin');
const pelicula3: Pelicula = new Pelicula('Avengers');
const pelicula4: Pelicula = new Pelicula('Pikachu');
//Crear salas
const sala1 = cine.crearSala(1, 1, pelicula4, 1);
const sala2 = cine.crearSala(2, 2, pelicula2, 2);
const sala3 = cine.crearSala(3, 3, pelicula1, 3);
const sala4 = cine.crearSala(4, 4, pelicula3, 4);
//Crear clientes
const cliente1: Cliente = new Cliente('Angel', sala1, 3, 12, ['Canguil', 'Refresco']);
const cliente2: Cliente = new Cliente('Leslie', sala2, 1, 13, ['Hotdog', 'Jugo']);
const cliente3: Cliente = new Cliente('Génesis', sala3, 2, 31, ['Canguil', 'Bebida']);
const cliente4: Cliente = new Cliente('Daya', sala4, 5, 39, ['Hotdog', 'Gaseosa']);
//Impresión de los datos
console.log(`------------------------------------------------------------`);
cliente1.mostrarDetalles();
cliente2.mostrarDetalles();
cliente3.mostrarDetalles();
cliente4.mostrarDetalles();
