import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import{HomeMainComponent} from '../home/home-main/home-main.component';

import {CalificacionListComponent} from '../calificacion/calificacion-list/calificacion-list.component';
import {CalificacionDetailComponent} from '../calificacion/calificacion-detail/calificacion-detail.component';
import {JuradoListComponent} from '../jurado/jurado-list/jurado-list.component';
import {JuradoDetailComponent} from '../jurado/jurado-detail/jurado-detail.component';
import {OrganizadorListComponent} from '../organizador/organizador-list/organizador-list.component';
import {OrganizadorDetailComponent} from '../organizador/organizador-detail/organizador-detail.component';

import {OrganizadorCreateComponent} from '../organizador/organizador-create/organizador-create.component';

import {RondaListComponent} from '../ronda/ronda-list/ronda-list.component';
import {RondaDetailComponent} from '../ronda/ronda-detail/ronda-detail.component';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';

import {ClienteListComponent} from '../cliente/cliente-list/cliente-list.component';
import {ClienteDetailComponent} from '../cliente/cliente-detail/cliente-detail.component';
import {ClienteCreateComponent} from '../cliente/cliente-create/cliente-create.component';

import {FormaDePagoListComponent} from '../forma-de-pago/forma-de-pago-list/forma-de-pago-list.component';
import {FormaDePagoDetailComponent} from '../forma-de-pago/forma-de-pago-detail/forma-de-pago-detail.component';
import {FormaDePagoCreateComponent} from '../forma-de-pago/forma-de-pago-create/forma-de-pago-create.component';

import {PhotoListComponent} from '../photo/photo-list/photo-list.component';

import {PhotoDetailComponent} from '../photo/photo-detail/photo-detail.component';
import {PhotoEditComponent} from '../photo/photo-edit/photo-edit.component';
import {FacturaListComponent} from '../factura/factura-list/factura-list.component';
import {FacturaDetailComponent} from '../factura/factura-detail/factura-detail.component';
import {FacturaCreateComponent} from '../factura/factura-create/factura-create.component';


import { ConcursoListComponent } from '../concurso/concurso-list/concurso-list.component';
import { ConcursoDetailComponent } from '../concurso/concurso-detail/concurso-detail.component';

import {FotografoListComponent} from '../fotografo/fotografo-list/fotografo-list.component';
import {FotografoDetailComponent} from '../fotografo/fotografo-detail/fotografo-detail.component';
import {InteresFotograficoListComponent} from '../interes-fotografico/interes-fotografico-list/interes-fotografico-list.component';
import {InteresFotograficoDetailComponent} from '../interes-fotografico/interes-fotografico-detail/interes-fotografico-detail.component';


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
        path: 'fotografos',
        children:[
            {
                path: 'list',
                component: FotografoListComponent
            },
            {
                path: ':id',
                component: FotografoDetailComponent
            }
        ]
    },
    {
        path: 'interesFotograficos',
        children:[
            {
                path: 'list',
                component: InteresFotograficoListComponent
            },
            {
                path: ':id',
                component: InteresFotograficoDetailComponent
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
            },
            {
                path: 'comprar',
                component: FacturaCreateComponent
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
        path: 'rondas',
        children:[
            {
                path: 'list',
                component: RondaListComponent
            },
            {
                path: ':id',
                component: RondaDetailComponent
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
          }]
      },

      {

        path:'formasDePago', 
        children:[
          {
          path: 'list', 
          component:FormaDePagoListComponent
          },
          {
            path:':id', 
            component: FormaDePagoDetailComponent,
            outlet: 'detail'
          }]
      },

     
  {
        path: 'concursos',
        children:[
            {
                path:'list',
                component: ConcursoListComponent
            },
            {
                path:':id',
                component: ConcursoDetailComponent
            }

        ]
    },
    {
        path: 'home',
        component: HomeMainComponent
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
