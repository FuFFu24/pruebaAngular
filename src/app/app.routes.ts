import { Routes } from '@angular/router';
import { ListaJuegosMesaComponent } from './componentes/lista-juegos-mesa/lista-juegos-mesa.component';
import { DescripcionJuegoMesaComponent } from './componentes/descripcion-juego-mesa/descripcion-juego-mesa.component';

export const routes: Routes = [
    { path: "", component: ListaJuegosMesaComponent },
    { path: "descripcionJuegoMesa/:id", component: DescripcionJuegoMesaComponent }
];
