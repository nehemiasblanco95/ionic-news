import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';
const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  page = 0;
  categoria = "";
  categoriaPage= 0;


  constructor(private http: HttpClient) { }

  ejecutarQuery<T>(query: string){

    return this.http.get<T>( apiUrl + query, {headers} );

  }

  getTopHeadlines() {
    this.page++;
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&page=${this.page}`);
  }

  getTopHeadlinesCategoria(categoria: string) {

    if (this.categoria === categoria) {
this.categoriaPage++;
    } else {
this.categoriaPage = 1;
this.categoria = categoria;
    }
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${categoria}&page=${this.categoriaPage}`);
  }



}
