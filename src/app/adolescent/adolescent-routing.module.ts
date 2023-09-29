import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdolescentComponent } from './pages/home-adolescent/home-adolescent.component';
import { AdolescentFormComponent } from './components/adolescent-form/adolescent-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeAdolescentComponent
  },{
    path:'FormAttorney',
    component: AdolescentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdolescentRoutingModule { }
