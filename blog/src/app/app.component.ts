import { Component } from '@angular/core';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { BlogComponent } from "./components/blog/blog.component";



@Component({
  selector: 'app-root',
  imports: [CabeceraComponent, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'blog';
}
