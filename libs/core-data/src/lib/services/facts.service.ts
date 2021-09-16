import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";
import { Fact, FactPagination } from "@cat-facts/api-interfaces";



const BASE_URL = 'https://catfact.ninja/';
const MODEL = 'facts';



@Injectable({
  providedIn: 'root'
})
export class FactsService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<Fact[]> {
    return this.http.get<FactPagination>(this.getUrl()).pipe(
      tap((res) => console.log(res)),
      map((response) => response.data)
    );
  };

  getOne(id: string): Observable<Fact> {
    return this.http.get<Fact>(this.getUrlById(id))
  }

  private getUrl() {
    return `${BASE_URL}${MODEL}`
  };

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
