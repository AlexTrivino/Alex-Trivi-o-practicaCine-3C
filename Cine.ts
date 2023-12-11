import { Pelicula } from "./Pelicula";
import { Sala } from "./Sala";

export class Cine {
    private salas: Sala[] = []; //La clase cine recibe un array de salas
    private static instancia: Cine | null = null; //Se crea una instancia para poder acceder

    private constructor(){
    }

    public static getInstance(): Cine {
        if (!Cine.instancia) {
            Cine.instancia = new Cine();
        }
        return Cine.instancia;
    } // Metodo acceder a la instancia

    public crearSala(numero: number, asientosTotales: number, pelicula: Pelicula, asientosDisponibles: number): Sala {
        const sala: Sala = new Sala(numero, asientosTotales, pelicula, asientosDisponibles);
        this.salas.push(sala);
        return sala;
    } //Metodo que crea una sala y la añade al array
}
