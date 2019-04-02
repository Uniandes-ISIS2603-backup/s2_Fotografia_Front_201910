import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Concurso } from './concurso';
import { ConcursoDetail}  from './concurso-detail';

import { Observable } from 'rxjs';

const API_URL = "http://localhost:8000/frontstepbystep-api/api";
const concursos = "/concursos";

@Injectable({
  providedIn: 'root'
})
export class ConcursoService {

  constructor(private http: HttpClient) { }
  
  getConcursos() : Observable<Concurso[]> {
        return this.http.get<Concurso[]>(API_URL + concursos);
    }
    
  getConcursoDetail(concursoId): Observable<ConcursoDetail> {
      return this.http.get<ConcursoDetail>(API_URL + concursos + '/' + concursoId);
  }
}
