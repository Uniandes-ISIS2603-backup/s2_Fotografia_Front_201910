import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import {CalificacionListComponent} from '../calificacion/calificacion-list/calificacion-list.component';
import {CalificacionDetailComponent} from '../calificacion/calificacion-detail/calificacion-detail.component';
import {JuradoListComponent} from '../jurado/jurado-list/jurado-list.component';
import {JuradoDetailComponent} from '../jurado/jurado-detail/jurado-detail.component';
import {OrganizadorListComponent} from '../organizador/organizador-list/organizador-list.component';
import {OrganizadorDetailComponent} from '../organizador/organizador-detail/organizador-detail.component';
import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import {PhotoListComponent} from '../photo/photo-list/photo-list.component';
import {PhotoDetailComponent} from '../photo/photo-detail/photo-detail.component';
import {PhotoEditComponent} from '../photo/photo-edit/photo-edit.component';
import {FacturaListComponent} from '../factura/factura-list/factura-list.component';
import {FacturaDetailComponent} from '../factura/factura-detail/factura-detail.component';

const routes: Routes = [
    {
        path: 'calificaciones',
        children:[
            {
                path: 'list',
                component: CalificacionListComponent
            },
            {
                path: ':id',
                component: CalificacionDetailComponent
            }
        ]
    },
    {
        path: 'photos',
        children:[
            {
                path: 'list',
                component: PhotoListComponent
            },
            {
                path: ':id',
                component: PhotoDetailComponent
            },
            {
                path: 'edit/id',
                component: PhotoEditComponent
            }
        ]
    },
    {
        path: 'jurados',
        children:[
            {
                path: 'list',
                component: JuradoListComponent
            },
            {
                path: ':id',
                component: JuradoDetailComponent
            }
        ]
    },
    {
        path: 'facturas',
        children:[
            {
                path: 'list',
                component: FacturaListComponent
            },
            {
                path: ':id',
                component: FacturaDetailComponent
            }
        ]
    },
    {
        path: 'organizadors',
        children: [
            {
                path: 'list',
                component: OrganizadorListComponent
            },
            {
                path: ':id',
                component: OrganizadorDetailComponent
            }
        ]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
