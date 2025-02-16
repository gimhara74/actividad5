import { Component } from '@angular/core';
import { IPublicacion } from '../../interfaces/ipublicacion.interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  titleHead: string = 'Añade tu nueva tanda';
  visibleFrm: boolean = false;
  visibleNoticiaIndex: number | null = null;
  
  fecha: string = '';
  imagen: string = '';
  titulo: string = '';  
  noticia: string = '';
  errorFrm: boolean = false;
  msgError: string = 'Este es un mensaje de error';
 
  

  arrPublicaciones: IPublicacion[] = [
    {
      titulo: 'Volando a ras de tierra.',
      imagen: '/images/304.jpg',
      noticia: 'Esta fantástica maquina es capaz de volar a ras de tierra, en tan solo 900 metros alcanzado una ' + 
      'velocidad de 304 km/h. El piloto local, Johnny 16, nos comenta que es una sensación única. ' +
      'Nos muestra orgulloso la telemetría de su RSV4 1100 Factory.',
      fecha: '01/02/2025'
    },
    {
      titulo: 'Me rasco el codo.',
      imagen: '/images/crazy.jpg',
      noticia: 'Tras ser preguntado el piloto local, Johnny 16, el motivo por el cual arrastra el codo en todas ' +
      'las curvas, este contesto que lo hace por que le pica. Nos muestra en el box las deslizaderas de su codo gastadas. ' +
      'Comenta que este fin de semana se las cambiara por unas nuevas.',
      fecha: '08/02/2025'
    }
    
  ];

  

  ngOnInit() {
    console.log(this.arrPublicaciones);
  }
  submitHandler() {
      if (this.fecha ===''){
        this.errorFrm = true;  
        this.msgError = 'La fecha no puede estar vacía';
        return;
      }

      if (this.imagen ===''){
        this.errorFrm = true;  
        this.msgError = 'Por favor selecciona una imagen';
        return;
      }

      if (this.titulo ===''){
        this.errorFrm = true;  
        this.msgError = 'El titulo no puede estar vacío';
        return;
      }

      if (this.noticia ===''){
        this.errorFrm = true;  
        this.msgError = 'Por favor escribe tu articulo';
        return;
      }

    this.arrPublicaciones.push({
      titulo: this.titulo, imagen: this.imagen,
      noticia: this.noticia, fecha: this.formatDate(this.fecha)
    });
    this.errorFrm = !this.errorFrm 
  }

  hidenfrm(): void {
    this.visibleFrm = !this.visibleFrm;
  }
  
  toggleNoticia(index: number) {
    this.visibleNoticiaIndex = this.visibleNoticiaIndex === index ? null : index;
  }

  formatDate(fecha: string): string {
    return new Date(fecha).toLocaleDateString();
  }
}
