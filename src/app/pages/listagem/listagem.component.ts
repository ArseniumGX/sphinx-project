import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Cliente = {
  codigo: string;
  nome: string;
  cpf: string;
  telefone: string;
  endereco: string;
};

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss',
})
export class ListagemComponent {
  filtro: string = '';
  input: string = '';
  clientes: Cliente[] = this.carregarTodosClientes() || [];

  filtrarPor(opcao: string) {
    this.filtro = opcao === 'todos' ? '' : opcao;
    if (!this.filtro) {
      this.input = '';
      this.clientes = this.carregarTodosClientes();
    }
  }

  filtrar() {
    if (this.input.length > 2) {
      if (this.filtro === 'nome') {
        this.clientes = this.carregarClientesPorNome(this.input);
      } else if (this.filtro === 'telefone') {
        this.clientes = this.carregarClientesPorTelefone(this.input);
      } else {
        this.clientes = this.carregarTodosClientes();
      }
    } else {
      this.clientes = this.carregarTodosClientes();
    }
  }

  carregarTodosClientes(): Cliente[] {
    return JSON.parse(localStorage.getItem('clientes') as string);
  }

  carregarClientesPorNome(nome: string) {
    return this.carregarTodosClientes().filter((cliente) =>
      cliente.nome.startsWith(nome)
    );
  }

  carregarClientesPorTelefone(telefone: string) {
    return this.carregarTodosClientes().filter((cliente) =>
      cliente.telefone.startsWith(telefone)
    );
  }
}
