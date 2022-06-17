import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonagensApiService } from './shared/services/personagens-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  allPersonagens!: Observable<any>;
  total = 0;

  allPersonagensOb!: Observable<any>;

  constructor(private service: PersonagensApiService){
  }

  ngOnInit(): void {
    this.getPersonagens();
    //this.getPersonagensOb();
  }

  
  getPersonagens(){
    this.allPersonagens = this.service.getAllPersonagens();
  }

  // getPersonagensOb(){
  //   this.service.getAllPersonagensOb().subscribe(
  //     (data) => this.allPersonagensOb = data)
  // }


}
