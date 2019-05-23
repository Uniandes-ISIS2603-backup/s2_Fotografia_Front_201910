import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Concurso } from './concurso';
import { ConcursoDetail}  from './concurso-detail';
import { Photo } from '../photo/photo';
import { PhotoDetail } from '../photo/photo-detail';
import { Observable } from 'rxjs';
import { Fotografo } from '../fotografo/fotografo';
import { FotografoDetail} from '../fotografo/fotografo-detail';
const API_URL = "http://localhost:8080/s2_fotografia-api/api";
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
  
  getFotografoDetail(concurso, fotografo): Observable<FotografoDetail>{
      return this.http.get<FotografoDetail>(API_URL + concursos + '/' + concurso.id + '/fotografos/' + fotografo.id);
  }
  
  getFotografos(concurso):Observable<FotografoDetail[]>{
      return this.http.get<FotografoDetail[]>(API_URL + concursos + '/' + concurso.id + '/fotografos');
  }
  
  createConcurso(concurso): Observable<Concurso>{
      return this.http.post<Concurso>(API_URL + concursos, concurso);
  }
  
  updateConcurso(concurso): Observable<ConcursoDetail> {
      return this.http.put<ConcursoDetail>(API_URL + concursos + '/' + concurso.id, concurso);
  }
  
  putPhoto(concurso, photo): Observable<PhotoDetail>{
      return this.http.post<PhotoDetail>(API_URL + concursos + '/' + concurso.id + '/photos/' + photo.id, null);
  }
  
  putFotografo(concurso, fotografo) : Observable<FotografoDetail>{
      return this.http.post<FotografoDetail>(API_URL + concursos + '/' + concurso.id + '/fotografos/' + fotografo.id, null);
  }
}
