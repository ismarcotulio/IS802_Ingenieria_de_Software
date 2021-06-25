import { Component } from '@angular/core';
//palabra vista solo para componentes padres.
//palabra componente solo para componentes hijos.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vista-angular';
}
