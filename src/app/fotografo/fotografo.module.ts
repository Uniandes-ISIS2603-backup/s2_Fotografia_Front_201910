import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FotografoListComponent } from './fotografo-list/fotografo-list.component';

import { FotografoService } from './fotografo.service';
import { FormsModule } from '@angular/forms';
import { FotografoDetailComponent } from './fotografo-detail/fotografo-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FotografoCreateComponent } from './fotografo-create/fotografo-create.component';
import { FotografoEditComponent } from './fotografo-edit/fotografo-edit.component';
import { FotografoInteresfotograficoComponent } from './fotografo-interesfotografico/fotografo-interesfotografico.component';
import { PhotoModule } from '../photo/photo.module'
@NgModule({
    imports: [
        BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            CommonModule,
            FormsModule, 
            NgbModule,
            PhotoModule
      ],
      declarations: [FotografoListComponent, FotografoDetailComponent, FotografoCreateComponent, FotografoEditComponent, FotografoInteresfotograficoComponent],
      providers: [FotografoService],
      exports: [FotografoCreateComponent],
      bootstrap: [FotografoListComponent, FotografoCreateComponent]
})
export class FotografoModule {}