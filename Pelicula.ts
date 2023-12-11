export class Pelicula {
    private nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    getNombre(): string {
        return this.nombre;
    } //Get del nombre (necesario ya que está como privado)
}
