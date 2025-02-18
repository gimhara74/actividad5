import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { IPublicacion } from '../../interfaces/ipublicacion.interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  titleHead: string = 'Añade tu nueva tanda';
  pulseButton: string = 'Post';
  visibleNoticiaIndex: number | null = null;

  fecha: string = '';
  imagen: string = '';
  titulo: string = '';
  noticia: string = '';
  errorFrm: boolean = false;
  msgError: WritableSignal<string> = signal('');

  publicaciones: IPublicacion[] = [];
  arrPublicaciones: IPublicacion[] = [
    {
      titulo: 'Volando a ras de tierra.',
      imagen: '/images/304.jpg',
      noticia:
        'Esta fantástica maquina es capaz de volar a ras de tierra, en tan solo 900 metros alcanzado una ' +
        'velocidad de 304 km/h. El piloto local, Johnny 16, nos comenta que es una sensación única. ' +
        'Nos muestra orgulloso la telemetría de su RSV4 1100 Factory.',
      fecha: '01/02/2025',
    },
    {
      titulo: 'Me rasco el codo.',
      imagen: '/images/crazy.jpg',
      noticia:
        'Tras ser preguntado el piloto local, Johnny 16, el motivo por el cual arrastra el codo en todas ' +
        'las curvas, este contesto que lo hace por que le pica. Nos muestra en el box las deslizaderas de su codo gastadas. ' +
        'Comenta que este fin de semana se las cambiara por unas nuevas.',
      fecha: '08/02/2025',
    },
  ];

 
  ngOnInit() {
    this.publicaciones = this.arrPublicaciones;    
  }

  submitHandler() {
    if (this.fecha === '') {
      this.errorFrm = true;
      this.msgError.set('La fecha no puede estar vacía');
      return;
    }

    if (this.imagen === '') {
      this.errorFrm = true;
      this.msgError.set('Por favor selecciona una imagen');
      return;
    }

    if (this.titulo === '') {
      this.errorFrm = true;
      this.msgError.set('El titulo no puede estar vacío');
      return;
    }

    if (this.noticia === '') {
      this.errorFrm = true;
      this.msgError.set('Por favor escribe tu articulo');
      return;
    }

    this.arrPublicaciones.push({
      titulo: this.titulo,
      imagen: this.imagen,
      noticia: this.noticia,
      fecha: this.formatDate(this.fecha),
    });

    this.publicaciones = this.arrPublicaciones;
    this.pulseButton = 'Post';

    this.errorFrm = false;
    this.fecha = '';
    this.titulo = '';
    this.imagen = '';
    this.noticia = '';

    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  hidenfrm(boton: string): void {
    this.pulseButton = boton;
  }

  toggleNoticia(index: number) {
    this.visibleNoticiaIndex =
    this.visibleNoticiaIndex === index ? null : index;
  }
  changeHandler(event: any) {
    this.publicaciones = this.arrPublicaciones.filter((result) =>
      result.fecha.includes(event.target.value)
    );
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  formatDate(fecha: string): string {
    return new Date(fecha).toLocaleDateString();
  }
}
