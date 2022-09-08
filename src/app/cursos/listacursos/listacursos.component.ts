import { Curso } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss']
})
export class ListacursosComponent implements OnInit {

  cursos: Curso[]= [
    {id: 1, nomecurso: 'Desenvolvimento de sistema'},
    {id: 2, nomecurso: 'Logística'},
    {id: 3, nomecurso: 'Administração'},


  ];

  displayedColumns =['id','nomecurso']

  constructor() { }

  ngOnInit(): void {
  }

}
