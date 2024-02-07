import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { JuegoMesa } from '../../interfaces/juegoMesa';
import { ServicioJuegosMesaService } from '../../servicios/servicio-juegos-mesa.service';

@Component({
  selector: 'app-tarjeta-juego-mesa',
  standalone: true,
  imports: [NgIf],
  templateUrl: './tarjeta-juego-mesa.component.html',
  styleUrl: './tarjeta-juego-mesa.component.css'
})
export class TarjetaJuegoMesaComponent {
  @Input() id?: any;
  juegoMesa?: JuegoMesa|undefined;
  constructor(private servicioJuegosMesa: ServicioJuegosMesaService,) {}

  ngOnInit() {
    this.getJuegoMesa();
  }

  getJuegoMesa() {
    if (this.id) {
      this.servicioJuegosMesa.getJuegoMesa(this.id).then(juegoMesa => this.juegoMesa = juegoMesa);
    }
  }
}
