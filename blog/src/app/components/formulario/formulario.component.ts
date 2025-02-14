import { Component } from '@angular/core';
import { IPublicacion } from '../../interfaces/ipublicacion.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
titleHead: string = 'Añade tu nueva tanda';
visibleFrm: boolean = true;

  arrPublicaciones: IPublicacion[] = [
    {
      titulo: 'Noticia 1',
      imagen: 'https://via.placeholder.com/150',
      noticia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis nec dui tincidunt mollis. Nullam nec sapien nec libero lacinia tincidunt. Nullam in turpis nec dui tincidunt mollis. Nullam nec sapien nec libero lacinia tincidunt.',
      fecha: new Date()
    },
    {
      titulo: 'Noticia 2',
      imagen: 'https://via.placeholder.com/150',
      noticia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis nec dui tincidunt mollis. Nullam nec sapien nec libero lacinia tincidunt. Nullam in turpis nec dui tincidunt mollis. Nullam nec sapien nec libero lacinia tincidunt.',
      fecha: new Date()
    },
    {
      titulo: 'Noticia 3',
      imagen: 'https://via.placeholder.com/150',
      noticia: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis nec dui tincidunt mollis. Nullam nec sapien nec libero lacinia tincidunt. Nullam in turpis nec dui tincidunt mollis. Nullam nec sapien nec libero lacinia tincidunt.',
      fecha: new Date()
    }
  ];
  
  ngOnInit() {
    console.log(this.arrPublicaciones);
  }
  clickheader() {

    console.log('Has hecho clic en el header');
    //alert('Has hecho clic en el header MARTA');
    
    // Aquí puedes agregar la lógica que desees ejecutar cuando se haga clic en el botón
  }

  hidenfrm(): void {
    this.visibleFrm = !this.visibleFrm;
  }


}
