import { Sala } from "./Sala";

export class Cliente {
    private nombre: string;
    private pelicula: Sala;
    private sala: number;
    private numeroAsiento: number;
    private aperitivos: string[];

    constructor(nombre: string, pelicula: Sala, sala: number, numeroAsiento: number, aperitivos: string[]) {
        this.nombre = nombre;
        this.pelicula = pelicula;
        this.sala = sala;
        this.numeroAsiento = numeroAsiento;
        this.aperitivos = aperitivos;
    }

    mostrarDetalles(): void {
        console.log(`Cliente: ${this.nombre}`);
        console.log(`Pelicula: ${this.pelicula.retornarPelicula()}`);
        console.log(`Sala: ${this.sala}`);
        console.log(`Asiento: ${this.numeroAsiento}`);
        console.log(`Aperitivos: ${this.aperitivos.join(', ')}`);
        console.log(`------------------------------------------------------------`);
    }
}
