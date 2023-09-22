import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFuncionaryPage } from '@soa/funcionary/pages';

const routes: Routes = [
  {
    path: '',
    component: HomeFuncionaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionaryRoutingModule { }
