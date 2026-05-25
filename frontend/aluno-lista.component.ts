import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../models/aluno.model';

@Component({
  selector: 'app-aluno-lista',
  templateUrl: './aluno-lista.component.html',
  styleUrls: ['./aluno-lista.component.css']
})
export class AlunoListaComponent implements OnInit {
  alunos: Aluno[] = [];
  erroMensagem: string = '';

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunoService.getAlunos().subscribe({
      next: (dados) => this.alunos = dados,
      error: (err) => this.erroMensagem = 'Erro ao carregar a lista de alunos.'
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlunoService } from '../../services/aluno.service';
import { Aluno, Disciplina } from '../../models/aluno.model';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html'
})
export class AlunoDetalheComponent implements OnInit {
  aluno!: Aluno;
  disciplinas: Disciplina[] = [];
  loading: boolean = true;
  erroMensagem: string = '';

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunoService
  ) {}

  ngOnInit(): void {
    const ra = this.route.snapshot.paramMap.get('ra');
    if (ra) {
      // Busca detalhes do aluno
      this.alunoService.getAlunoPorRa(ra).subscribe({
        next: (dados) => {
          this.aluno = dados;
          this.loading = false;
        },
        error: () => {
          this.erroMensagem = 'Erro ao buscar dados do aluno.';
          this.loading = false;
        }
      });

      // Busca a lista de disciplinas separadamente (Requisito 3)
      this.alunoService.getDisciplinasPorAluno(ra).subscribe({
        next: (dados) => this.disciplinas = dados,
        error: () => this.erroMensagem = 'Erro ao buscar disciplinas do aluno.'
      });
    }
  }
}