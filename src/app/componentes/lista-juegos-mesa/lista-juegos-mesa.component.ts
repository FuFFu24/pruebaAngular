import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { JuegoMesa } from '../../interfaces/juegoMesa';
import { ServicioJuegosMesaService } from '../../servicios/servicio-juegos-mesa.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-juegos-mesa',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatButtonModule, NgFor],
  templateUrl: './lista-juegos-mesa.component.html',
  styleUrl: './lista-juegos-mesa.component.css'
})
export class ListaJuegosMesaComponent {
  juegosMesa: JuegoMesa[]|null;
  constructor(private servicioJuegosMesa: ServicioJuegosMesaService) {
    this.juegosMesa = [];
  }

  ngOnInit() {
    this.getJuegosMesa();
  }

  getJuegosMesa() {
    this.servicioJuegosMesa.getJuegosMesa().then(juegosMesa => this.juegosMesa = juegosMesa);
  }
}
