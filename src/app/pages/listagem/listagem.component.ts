import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  standalone: false,
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'categoria', 'ativo', 'tipo', 'acoes'];
  dataSource: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const dados = sessionStorage.getItem('livros');
    this.dataSource = dados ? JSON.parse(dados) : [];
  }

  voltarParaCadastro() {
    this.router.navigate(['/cadastro']);
  }

  excluir(index: number) {
    this.dataSource.splice(index, 1);
    sessionStorage.setItem('livros', JSON.stringify(this.dataSource));
    this.dataSource = [...this.dataSource];
  }
}
