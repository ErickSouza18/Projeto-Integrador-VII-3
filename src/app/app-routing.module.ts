import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
  { path: 'listagem', component: ListagemComponent },
  { path: 'cadastro', component: CadastroComponent },
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
