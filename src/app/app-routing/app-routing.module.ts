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
import {ClienteListComponent} from '../cliente/cliente-list/cliente-list.component';
import {ClienteDetailComponent} from '../cliente/cliente-detail/cliente-detail.component';
import {ClienteCreateComponent} from '../cliente/cliente-create/cliente-create.component';

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
        path:'clientes', 
        children:[
          {
          path: 'list', 
          component:ClienteListComponent
          },
          {
            path:':id', 
            component: ClienteDetailComponent,
            outlet: 'detail'
          },
          {
            path:'registro', 
            component: ClienteCreateComponent
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
