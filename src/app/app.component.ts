import { Component } from '@angular/core';
interface AppPage{
  title: string;
  redirecTo: string;
  icon: string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  appPages : AppPage[] = [
    { title: 'Usuario', redirecTo: '', icon: 'person' },
    { title: 'Lista de Asistencia', redirecTo: '/home', icon: 'people' },

    { title: 'Registrarse', redirecTo:'/registrar', icon:'finger-print'},

  ];
  

}
