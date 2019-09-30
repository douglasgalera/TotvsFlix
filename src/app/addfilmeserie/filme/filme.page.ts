import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Addfilmeserie } from '../shared/addfilmeserie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.page.html',
  styleUrls: ['./filme.page.scss'],
})
export class FilmePage implements OnInit {
  formAddfilmeserie: FormGroup;

  constructor(
    private router:Router
  ) {}

  ngOnInit() {
    this.createForm(new Addfilmeserie());
  }
  createForm(addfilme: Addfilmeserie) {
    this.formAddfilmeserie = new FormGroup({
      nome: new FormControl(Addfilmeserie.nome),
      tipo: new FormControl(Addfilmeserie.tipo),
      genero: new FormControl(Addfilmeserie.genero),
      dataLancamento: new FormControl(Addfilmeserie.dataLancamento),
      sinope: new FormControl(Addfilmeserie.sinope),
      inativo: new FormControl(Addfilmeserie.inativo)
    })
  }
  onSubmit() {
    // aqui você pode implementar a logica para fazer seu formulário salvar
    console.log(this.formAddfilmeserie.value);
 
    // Usar o método reset para limpar os controles na tela
    this.formAddfilmeserie.reset(new Addfilmeserie());
  }

}
