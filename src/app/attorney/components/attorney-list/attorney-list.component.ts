import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AttorneyService } from '@soa/attorney/services/attorney.service';
import { Attorney } from '@soa/attorney/model/attorney.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AttorneyFormComponent } from '../attorney-form/attorney-form.component';


@Component({
  selector: 'app-attorney-list',
  templateUrl: './attorney-list.component.html',
  styleUrls: ['./attorney-list.component.scss'],
})
export class AttorneyListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'fatherlastname', 'motherlastname', 'dni', 'cellphone', 'address', 'active', 'acciones'];

  dataSource = new MatTableDataSource<Attorney>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  activeFilter: boolean | null = null;
  selectedStatus: string | null = null;


  constructor(private attorneyService: AttorneyService, @Inject(MatSnackBar) private snackBar: MatSnackBar, private dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Attorney>();

  }

  ngOnInit() {
    this.attorneyService.getAttorneys().subscribe((attorneys) => {
      this.dataSource.data = attorneys;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  loadAttorneys() {
    if (this.selectedStatus === null) {
      // Si no se selecciona ningún filtro, carga todos los abogados
      this.attorneyService.getAttorneys().subscribe((attorneys) => {
        this.dataSource.data = attorneys;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    } else {
      if (this.selectedStatus === 'A') {
        // Filtra y muestra abogados activos (A)
        this.attorneyService.getAttorneys().subscribe((attorneys) => {
          const activeAttorneys = attorneys.filter((attorney) => attorney.active === 'A');
          this.dataSource.data = activeAttorneys;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      } else if (this.selectedStatus === 'I') {
        // Si se selecciona "Inactivo", carga los abogados inactivos
        this.attorneyService.getInactiveAttorneys().subscribe((attorneys) => {
          this.dataSource.data = attorneys;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      }
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  applyActiveFilter() {
    this.loadAttorneys();
  }

  getStatusLabel(status: string): string {
    return status === 'A' ? 'Activo' : 'Inactivo';
  }

  deleteAttorney(attorney: Attorney): void {
    this.attorneyService.deleteAttorney(attorney.id).subscribe(() => {

      this.showSuccessMessage('Abogado eliminado con éxito');
      console.log('Eliminando abogado:', attorney);

      this.loadAttorneys();
    }, (error) => {
      // Maneja el error si la eliminación falla
      console.error('Error al eliminar el abogado:', error);
      // Muestra un mensaje de error
      this.showErrorSnackBar('Error al eliminar el abogado');
    });
  }

  restoreAttorney(attorney: Attorney): void {
    this.attorneyService.restoreAttorney(attorney.id).subscribe(() => {
      attorney.active = 'A';
      this.showSuccessMessage('Apoderado restaurado con éxito');
      this.loadAttorneys();
    }, (error) => {

      console.error('Error al eliminar el abogado:', error);

      this.showErrorSnackBar('Error al eliminar el abogado');
    });
  }

  showErrorSnackBar(message: string): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['custom-error-snackbar'];
    config.horizontalPosition = 'end';
    config.verticalPosition = 'top';
    config.duration = 4000;

    this.snackBar.open(message, 'Cerrar', config);
  }

  showSuccessMessage(message: string): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['custom-success-snackbar'];
    config.horizontalPosition = 'end';
    config.verticalPosition = 'top';
    config.duration = 4000;

    this.snackBar.open(message, 'Cerrar', config);
  }

  openDialog(info?: any): void {
    const dialogRef = this.dialog.open(AttorneyFormComponent, {
      width: '',
      height: '90%',
      data: info
    });
    dialogRef.afterClosed().subscribe(result => {
      this.loadAttorneys();
    });
  }

  openCreateAttorneyDialog() {
    const dialogRef = this.dialog.open(AttorneyFormComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Diálogo cerrado', result);
      if (result) {
        this.loadAttorneys();
      }
    });
  }

  nada(){
  }
  
}