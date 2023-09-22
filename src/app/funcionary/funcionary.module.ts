import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { FuncionaryRoutingModule } from './funcionary-routing.module';
import { HomeFuncionaryPage } from '@soa/funcionary/pages';
import { FuncionaryListComponent } from './components/funcionary-list/funcionary-list.component';

@NgModule({
  declarations: [HomeFuncionaryPage, FuncionaryListComponent],
  imports: [CommonModule, FuncionaryRoutingModule, MatTableModule],
})
export class FuncionaryModule {}
