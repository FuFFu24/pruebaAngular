import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { JuegoMesa } from '../../interfaces/juegoMesa';
import { ActivatedRoute } from '@angular/router';
import { ServicioJuegosMesaService } from '../../servicios/servicio-juegos-mesa.service';

@Component({
  selector: 'app-descripcion-juego-mesa',
  standalone: true,
  imports: [NgIf],
  templateUrl: './descripcion-juego-mesa.component.html',
  styleUrl: './descripcion-juego-mesa.component.css'
})
export class DescripcionJuegoMesaComponent {
  juegoMesa?:JuegoMesa;
  constructor (private activatedRouter: ActivatedRoute,
    private servicioJuegosMesa: ServicioJuegosMesaService) {
      const id:string | null = this.activatedRouter.snapshot.paramMap.get("id");
      if (id) {
        this.servicioJuegosMesa.getJuegoMesa(id).then(juegoLeido => {
          this.juegoMesa = juegoLeido;
        })
      }
    }
}
