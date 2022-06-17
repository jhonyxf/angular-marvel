import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { PersonagensApiService } from '../../services/personagens-api.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})
export class PersonagensComponent  implements OnInit{

  allPersonagens!: Observable<any>;
  personagens!: Observable<any>;
  total = 0;

  allPersonagensOb!: Observable<any>;
  

  pesquisaForm = this.formBuilder.group({
    personagem: '',
  });

  constructor(private service: PersonagensApiService, private formBuilder: FormBuilder,){
  }

  ngOnInit(): void {
    this.getAllPersonagens();
    //this.getPersonagensOb();
  }

  changeFn(valor: any){
    console.log(valor.target.value.length);
    if(valor.target.value.length > 2){
      this.buscarPersonagens(valor.target.value);
    }
  }

  onSubmit(){
    this.buscarPersonagens(this.pesquisaForm.get('personagem')?.value);
  }

  buscarPersonagens(nome: string){
    this.personagens = this.service.getPersonagem(nome);
  }

  getAllPersonagens(){
    this.allPersonagens = this.service.getAllPersonagens();
  }

  // getPersonagensOb(){
  //   this.service.getAllPersonagensOb().subscribe(
  //     (data) => this.allPersonagensOb = data)
  // }




}
