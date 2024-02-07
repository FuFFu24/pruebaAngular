import { Injectable } from '@angular/core';
import { JuegoMesa } from '../interfaces/juegoMesa';

const LISTAJUEGOSMESA: JuegoMesa[] = [
  {
    "idProducto": "1",
    "nombre": "Mage Knight Board Game",
    "descripcion": "Sé un poderoso mago en un mundo de fantasía.",
    "precio": 64.95,
    "imagenURL": "mage-knight.jpg",
    "stock": 2,
    "editorial": "WizKids",
    "categoria": "Estrategia",
    "descuento": false,
    "porcentajeDescuento": 0,
    "fecha": "2011",
    "numJugadores": "1-4",
    "minutos": 150,
    "edad": 14,
    "nota": 8.09
  },
  {
    "idProducto": "2",
    "nombre": "Clank!: A Deck-Building Adventure",
    "descripcion": "Roba tesoros y escapa del dragón en este juego de construcción de mazos.",
    "precio": 32.99,
    "imagenURL": "clank.jpg",
    "stock": 10,
    "editorial": "Renegade Game Studios",
    "categoria": "Aventura",
    "descuento": true,
    "porcentajeDescuento": 15,
    "fecha": "2016",
    "numJugadores": "2-4",
    "minutos": 60,
    "edad": 12,
    "nota": 7.79
  },
  {
    "idProducto": "3",
    "nombre": "Through the Ages: A New Story of Civilization",
    "descripcion": "Construye una civilización a lo largo de la historia en este juego de cartas.",
    "precio": 54.50,
    "imagenURL": "through-the-ages.jpg",
    "stock": 5,
    "editorial": "Czech Games Edition",
    "categoria": "Estrategia",
    "descuento": false,
    "porcentajeDescuento": 0,
    "fecha": "2015",
    "numJugadores": "2-4",
    "minutos": 180,
    "edad": 14,
    "nota": 8.31
  },
  {
    "idProducto": "4",
    "nombre": "Dominant Species",
    "descripcion": "Sobrevive y evoluciona en un mundo prehistórico.",
    "precio": 59.99,
    "imagenURL": "dominant-species.jpg",
    "stock": 4,
    "editorial": "GMT Games",
    "categoria": "Estrategia",
    "descuento": true,
    "porcentajeDescuento": 20,
    "fecha": "2010",
    "numJugadores": "2-6",
    "minutos": 180,
    "edad": 14,
    "nota": 7.82
  },
  {
    "idProducto": "5",
    "nombre": "Tigris & Euphrates",
    "descripcion": "Construye civilizaciones en la antigua Mesopotamia.",
    "precio": 34.95,
    "imagenURL": "tigris-and-euphrates.jpg",
    "stock": 3,
    "editorial": "Rio Grande Games",
    "categoria": "Estrategia",
    "descuento": false,
    "porcentajeDescuento": 0,
    "fecha": "1997",
    "numJugadores": "2-4",
    "minutos": 90,
    "edad": 12,
    "nota": 7.70
  },
  {
    "idProducto": "6",
    "nombre": "Cyclades",
    "descripcion": "Lucha por el control de las islas griegas en este juego de batallas mitológicas.",
    "precio": 44.50,
    "imagenURL": "cyclades.jpg",
    "stock": 2,
    "editorial": "Matagot",
    "categoria": "Estrategia",
    "descuento": true,
    "porcentajeDescuento": 10,
    "fecha": "2009",
    "numJugadores": "2-5",
    "minutos": 90,
    "edad": 12,
    "nota": 7.51
  },
  {
    "idProducto": "7",
    "nombre": "Jaipur",
    "descripcion": "Conviértete en un comerciante en la India y construye tu imperio.",
    "precio": 19.99,
    "imagenURL": "jaipur.jpg",
    "stock": 10,
    "editorial": "GameWorks",
    "categoria": "Familiar",
    "descuento": false,
    "porcentajeDescuento": 0,
    "fecha": "2009",
    "numJugadores": "2",
    "minutos": 30,
    "edad": 10,
    "nota": 7.49
  },
  {
    "idProducto": "8",
    "nombre": "Tichu",
    "descripcion": "Un emocionante juego de cartas de equipo.",
    "precio": 14.50,
    "imagenURL": "tichu.jpg",
    "stock": 11,
    "editorial": "Rio Grande Games",
    "categoria": "Familiar",
    "descuento": true,
    "porcentajeDescuento": 10,
    "fecha": "1991",
    "numJugadores": "3-6",
    "minutos": 60,
    "edad": 10,
    "nota": 7.58
  },
  {
    "idProducto": "9",
    "nombre": "Conan",
    "descripcion": "Únete a Conan en aventuras épicas en la Era Hiboria.",
    "precio": 54.99,
    "imagenURL": "conan.jpg",
    "stock": 9,
    "editorial": "Monolith",
    "categoria": "Aventura",
    "descuento": false,
    "porcentajeDescuento": 0,
    "fecha": "2016",
    "numJugadores": "2-5",
    "minutos": 120,
    "edad": 14,
    "nota": 7.65
  },
  {
    "idProducto": "10",
    "nombre": "El Grande",
    "descripcion": "Conquista España en este juego de estrategia ambientado en la Edad Media.",
    "precio": 29.99,
    "imagenURL": "el-grande.jpg",
    "stock": 8,
    "editorial": "Hans im Glück",
    "categoria": "Estrategia",
    "descuento": true,
    "porcentajeDescuento": 15,
    "fecha": "1995",
    "numJugadores": "2-5",
    "minutos": 90,
    "edad": 12,
    "nota": 7.73
  }
]

@Injectable({
  providedIn: 'root'
})
export class ServicioJuegosMesaService {

  constructor() { }
  async getJuegosMesa(): Promise<JuegoMesa[]|[]> {
    return LISTAJUEGOSMESA;
  }
  async getJuegoMesa(id:string): Promise<JuegoMesa|undefined> {
    return LISTAJUEGOSMESA.find(juegoMesa => juegoMesa.idProducto == id);
  }
}
