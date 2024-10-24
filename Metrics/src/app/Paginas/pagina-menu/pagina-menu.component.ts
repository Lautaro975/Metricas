import { Component } from '@angular/core';
import { MenuComponent } from "../../Components/PaginaPrincipal/menu/menu.component";
import { CuerpoComponent } from "../../Components/PaginaPrincipal/cuerpo/cuerpo.component";

@Component({
  selector: 'app-pagina-menu',
  standalone: true,
  imports: [MenuComponent, CuerpoComponent],
  templateUrl: './pagina-menu.component.html',
  styleUrl: './pagina-menu.component.css'
})
export class PaginaMenuComponent {

}
