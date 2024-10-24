import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaginaMenuComponent } from "./Paginas/pagina-menu/pagina-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaginaMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Metrics';
}
