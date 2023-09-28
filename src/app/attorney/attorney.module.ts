import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttorneyRoutingModule } from './attorney-routing.module';
import { HomeAttorneyPage } from './pages/home-attorney/home-attorney.page';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AttorneyListComponent } from "./components/attorney-list/attorney-list.component";
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
    declarations: [
        HomeAttorneyPage,AttorneyListComponent
    ],
    imports: [
        CommonModule,
        AttorneyRoutingModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
        MatSelectModule,
        MatInputModule,
        NgFor,NgIf,
        ReactiveFormsModule,
        FormsModule,
        MatIconModule,
        MatSnackBarModule,
        MatDialogModule
    ]
})
export class AttorneyModule { }
