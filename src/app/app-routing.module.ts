import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminContainerComponent } from '@soa/shared/layout/containers';

const routes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'funcionary'
      },
      {
        path: 'funcionario',
        loadChildren: () => import('./funcionary/funcionary.module').then(m => m.FuncionaryModule)
      },
      {
        path: 'adolescente',
        loadChildren: () => import('./adolescent/adolescent.module').then(m => m.AdolescentModule)
      },
      {
        path: 'apoderado',
        loadChildren: () => import('./attorney/attorney.module').then(m => m.AttorneyModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
