import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdolescentService } from '@soa/adolescent/services/adolescent.service';
import { AdolescentFormComponent } from '../adolescent-form/adolescent-form.component';

@Component({
  selector: 'app-adolescent-list',
  templateUrl: './adolescent-list.component.html',
  styleUrls: ['./adolescent-list.component.scss']
})
export class AdolescentListComponent {

  adolescentColumns: string[] = ['name', 'Apellidos', 'dni', 'crime_committed', 'birthday', 'Direccion','Acciones'];
  dataSource: any[] = [];
  active: any = "A";
  attorneyForm!: FormGroup;

  constructor(private fb: FormBuilder, private adolescentService: AdolescentService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.findAll();

  };

  findAll() {
    if (this.active == "I") {
      this.adolescentService
        .findAllInactive()
        .subscribe((res) => (this.dataSource = res));
    } else {
      this.adolescentService.findAll().subscribe((res) => {
        this.dataSource = res
        console.log(res)
      });

    }
  }



  delete(id: any) {
    this.adolescentService.DeleteAttorney(id).subscribe(res => {
      this.findAll();
    })
  }

  openDialog(info?: any): void {
    const dialogRef = this.dialog.open(AdolescentFormComponent, {
      width: '',
      height: '90%',
      data: info

    });

    dialogRef.afterClosed().subscribe(result => {
      this.findAll();
    });

  }

  restore(idrestaurar: any) {
    this.adolescentService.restore(idrestaurar.id).subscribe(res => {
      this.findAll();
    })
  }
}
