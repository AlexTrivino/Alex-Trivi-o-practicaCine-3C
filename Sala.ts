import { Pelicula } from "./Pelicula";

export class Sala {
    public numero: number;
    public asientosTotales: number;
    public pelicula: Pelicula;
    private asientosDisponibles: number;

    constructor(numero: number, capacidad: number, pelicula: Pelicula, asientosDisponibles: number) {
        this.numero = numero;
        this.asientosTotales = capacidad;
        this.pelicula = pelicula;
        this.asientosDisponibles = asientosDisponibles;
    }
    
    retornarAsientosDisponibles(): number {
        return this.asientosDisponibles;
    }

    retornarPelicula(): string{
        return this.pelicula.getNombre();
    }
}
