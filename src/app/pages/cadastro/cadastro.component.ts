import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  form = { nome: '', categoria: '', ativo: false, tipo: '' };

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  salvar() {
    const dadosSalvos = JSON.parse(sessionStorage.getItem('livros') || '[]');
    dadosSalvos.push(this.form);
    sessionStorage.setItem('livros', JSON.stringify(dadosSalvos));

    this.snackBar.open('Livro salvo com sucesso!', 'Fechar', { duration: 3000 });
    this.form = { nome: '', categoria: '', ativo: false, tipo: '' };
  }

  cancelar() {
    this.form = { nome: '', categoria: '', ativo: false, tipo: '' };
  }

  irParaListagem() {
    this.router.navigate(['/listagem']);
  }
}
