import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdolescentRoutingModule } from './adolescent-routing.module';
import { AdolescentListComponent } from './components/adolescent-list/adolescent-list.component';
import { AdolescentFormComponent } from './components/adolescent-form/adolescent-form.component';
import { HomeAdolescentComponent } from './pages/home-adolescent/home-adolescent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AdolescentListComponent,
    AdolescentFormComponent,
    HomeAdolescentComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    AdolescentRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es' }, // Configura la zona horaria aquí
  ],
})
export class AdolescentModule { }
