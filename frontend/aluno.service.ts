import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno, Disciplina } from '../models/aluno.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private apiUrl = 'http://localhost:3000/alunos'; // Altere para a URL da sua API

  constructor(private http: HttpClient) {}

  // 1. GET /alunos
  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.apiUrl);
  }

  // 2. GET /alunos/:ra
  getAlunoPorRa(ra: string): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiUrl}/${ra}`);
  }

  // 3. GET /alunos/:ra/disciplinas
  getDisciplinasPorAluno(ra: string): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(`${this.apiUrl}/${ra}/disciplinas`);
  }

  // 4. PUT /alunos/:ra
  atualizarAluno(ra: string, aluno: Aluno): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.apiUrl}/${ra}`, { ...aluno });
  }
}