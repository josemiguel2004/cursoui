import { Injectable } from '@angular/core';
import { Aluno } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  listAluno(): Aluno[]{
    return[
      {id: 1, nomealuno: 'Miguel'},
      {id: 2, nomealuno: 'Gabriel'},
      {id: 3, nomealuno: 'Vinicius'},
      {id: 4, nomealuno: 'Karen'},
      {id: 5, nomealuno: 'Santana'},
      {id: 6, nomealuno: 'Ana Bia'},
    ];
  }
}
