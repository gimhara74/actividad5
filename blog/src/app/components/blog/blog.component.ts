import { Component, signal, WritableSignal } from '@angular/core';
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

  dateInvalid: boolean = false;
  imgInvalid: boolean = false;
  titleInvalid: boolean = false;
  articleInvalid: boolean = false;
  fecha: string = new Date().toISOString().split('T')[0];
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


 
  ngOnInit(): void {
    this.publicaciones = this.arrPublicaciones;
    console.log('Publicaciones:', this.publicaciones);

  }

  submitHandler(): void {
    if (this.fecha === '') {
      this.errorFrm = true;
      this.msgError.update((msg: string) => msg= 'Por favor selecciona una fecha');
      this.dateInvalid = true;
      return;
    } else {
        this.dateInvalid = false;
    }

    if (this.imagen === '') {
      this.errorFrm = true;      
      this.msgError.update((msg: string) => msg= 'Por favor selecciona una imagen');
      this.imgInvalid = true;
      return;
    } else {
        this.imgInvalid = false;
    }

    if (this.titulo === '') {
      this.errorFrm = true;      
      this.msgError.update((msg: string) => msg= 'Por favor asigna un titulo');
      this.titleInvalid = true;
      return;
    } else {  
        this.titleInvalid = false;
    }

    if (this.noticia === '') {
      this.errorFrm = true;      
      this.msgError.update((msg: string) => msg= 'Por favor escribe tu articulo');
      this.articleInvalid = true;
      return;
    } else {
        this.articleInvalid = false;
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

  toggleNoticia(index: number): void {
    this.visibleNoticiaIndex =
    this.visibleNoticiaIndex === index ? null : index;
  }
  changeHandler(event: any): void {
    this.publicaciones = this.arrPublicaciones.filter((result) =>
      result.fecha.includes(event.target.value)
    );
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  formatDate(fecha: string): string {
    return new Date(fecha).toLocaleDateString();
  }

}
    


