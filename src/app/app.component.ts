import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaJuegosMesaComponent } from './componentes/lista-juegos-mesa/lista-juegos-mesa.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaJuegosMesaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-prueba-proyecto';
}
