import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrganizadorListComponent} from './organizador-list/organizador-list.component';
import {OrganizadorService} from './organizador.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [OrganizadorListComponent],
    providers: [OrganizadorService],
    exports: [OrganizadorListComponent]
})
export class OrganizadorModule {}
