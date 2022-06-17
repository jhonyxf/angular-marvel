import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonagensApiService {

PUBLIC_KEY = 'sua-chave-publica';
HASH = 'seu-hash';
URL_API = `https://gateway.marvel.com:443/v1/public/characters?offset=10&nameStartsWith=Spider&orderBy=name&limit=100&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  personagens!: Observable<any>;
  personagensOb!: Observable<any>;
  total: number = 0;

constructor(private http: HttpClient) { }

  getAllPersonagens(): Observable<any>{
    return this.http.get<any>(this.URL_API)
            .pipe(map((data:any) => data.data.results))

  }

  getPersonagem(nome: string): Observable<any>{
    const GET_URL_API = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${nome}&orderBy=name&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
    return this.http.get<any>(GET_URL_API)
            .pipe(map((data:any) => data.data.results))
  }


  // getAllPersonagensOb(): Observable<Observable<any>>{
  //   return this.http.get<any>(this.URL_API)
  //           .pipe(map((data:any) => of(data.data.results)))
  // }


}
