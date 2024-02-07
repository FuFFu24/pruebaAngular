export interface JuegoMesa {
    idProducto: string;
    nombre: string;
    descripcion: string;
    precio: number;
    imagenURL: string;
    stock: number;
    editorial: string;
    categoria: string;
    descuento: boolean;
    porcentajeDescuento: number;
    fecha: string;
    numJugadores: string;
    minutos: number;
    edad: number;
    nota: number;
}