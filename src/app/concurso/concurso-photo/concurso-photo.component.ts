import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PhotoDetail } from '../../photo/photo-detail';
import { Photo } from '../../photo/photo';
import { Fotografo } from '../../fotografo/fotografo';
import { FotografoDetail } from '../../fotografo/fotografo-detail';
import {ToastrService} from 'ngx-toastr';
import {ConcursoService} from '../concurso.service';
@Component({
  selector: 'app-concurso-photo',
  templateUrl: './concurso-photo.component.html',
  styleUrls: ['./concurso-photo.component.css']
})
export class ConcursoPhotoComponent implements OnInit {

  constructor(private concursoService: ConcursoService,
              private toastrService: ToastrService) { }


  @Input() fotografo: FotografoDetail;

  @Output() select = new EventEmitter<Photo>();
  
  selectFoto(foto: Photo): void{
      this.select.emit(foto);
  }
  
  ngOnInit() {
  }

}
