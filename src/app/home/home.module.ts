import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMainComponent } from './home-main/home-main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeMainComponent],
  exports: [HomeMainComponent]
})
export class HomeModule { }
