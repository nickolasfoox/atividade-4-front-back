import { Routes } from '@angular/router';
import { AlunoListaComponent } from './pages/aluno-lista/aluno-lista.component';
import { AlunoDetalheComponent } from './pages/aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './pages/aluno-form/aluno-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'alunos', pathMatch: 'full' },
  { path: 'alunos', component: AlunoListaComponent },
  { path: 'alunos/detalhes/:ra', component: AlunoDetalheComponent },
  { path: 'alunos/editar/:ra', component: AlunoFormComponent },
  { path: '**', redirectTo: 'alunos' } // Redireciona rotas inexistentes
];