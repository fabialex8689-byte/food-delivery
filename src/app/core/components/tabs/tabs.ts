import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';


@Component({
  imports: [],
  selector: 'app-tabs',
  styleUrl: './tabs.scss',
  templateUrl: './tabs.html',
})
export class Tabs {

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("EVENTO", event)
        switch (event.urlAfterRedirects) {
          case "":
          case "/":
            this.seleccionado = [true, false, false, false];
            break;
          case "/buscar":
            this.seleccionado = [false, true, false, false];
            break;
          case "/carrito":
            this.seleccionado = [false, false, true, false];
            break;
          case "/perfil":
            this.seleccionado = [false, false, false, true];
            break;
          default:
            this.seleccionado = [true, false, false, false];
            break;

        }
      
      }
    });
    
  }

  seleccionado = [false, false, false, false];

  navegar(direccion: string) {
    //..cambiar de pagina
    this.router.navigate([direccion])
    console.log(direccion)
    
  }

}

