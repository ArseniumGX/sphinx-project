import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  codigo: string = '';
  nome: string = '';
  cpf: string = '';
  telefone: string = '';
  endereco: string = '';
  protected clientes: any[] = localStorage.getItem('clientes')
    ? JSON.parse(localStorage.getItem('clientes') as string)
    : [];
  protected cliente = {};

  salvar() {
    this.cliente = {
      codigo: this.codigo,
      nome: this.nome,
      cpf: this.cpf,
      telefone: this.telefone,
      endereco: this.endereco,
    };
    this.clientes.push(this.cliente);
    localStorage.setItem('clientes', JSON.stringify(this.clientes));
    window.history.back();
  }

  reset() {
    this.codigo = '';
    this.nome = '';
    this.cpf = '';
    this.telefone = '';
    this.endereco = '';
  }

  cancelar() {
    this.reset();
    window.history.back();
  }
}
