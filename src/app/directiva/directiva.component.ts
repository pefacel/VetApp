import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
 
})
export class DirectivaComponent   {

  listaCurso: string [] = ['TypeScript', 'Java', 'Spring', 'Angular'];

  Habilitar : boolean = true;

  constructor() { }

 
  setHabilitar(): void{

    this.Habilitar = (this.Habilitar == true) ? false: true;


  }

}
