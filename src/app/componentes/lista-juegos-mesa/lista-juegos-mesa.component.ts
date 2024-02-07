import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { JuegoMesa } from '../../interfaces/juegoMesa';
import { ServicioJuegosMesaService } from '../../servicios/servicio-juegos-mesa.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { TarjetaJuegoMesaComponent } from '../tarjeta-juego-mesa/tarjeta-juego-mesa.component';

@Component({
  selector: 'app-lista-juegos-mesa',
  standalone: true,
  imports: [MatGridListModule, NgFor, TarjetaJuegoMesaComponent],
  templateUrl: './lista-juegos-mesa.component.html',
  styleUrl: './lista-juegos-mesa.component.css'
})
export class ListaJuegosMesaComponent {
  juegosMesa: JuegoMesa[]|null;
  constructor(private servicioJuegosMesa: ServicioJuegosMesaService,
    private router: Router) {
    this.juegosMesa = [];
  }

  ngOnInit() {
    this.getJuegosMesa();
  }

  getJuegosMesa() {
    this.servicioJuegosMesa.getJuegosMesa().then(juegosMesa => this.juegosMesa = juegosMesa);
  }

  mostrarDescripcion(idJuegoMesa:string) {
    this.router.navigate(
      ['/descripcionJuegoMesa', idJuegoMesa]
    );
  }
}
