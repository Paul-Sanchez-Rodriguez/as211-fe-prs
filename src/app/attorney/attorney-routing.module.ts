import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAttorneyPage } from './pages/home-attorney/home-attorney.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAttorneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttorneyRoutingModule { }
