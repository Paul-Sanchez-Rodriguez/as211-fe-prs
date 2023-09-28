  import { Component, Inject, OnInit, ViewChild } from '@angular/core';
  import { MatPaginator } from '@angular/material/paginator';
  import { MatSort } from '@angular/material/sort';
  import { MatTableDataSource } from '@angular/material/table';
  import { AttorneyService } from '@soa/attorney/services/attorney.service';
  import { Attorney } from '@soa/attorney/model/attorney.model';
  import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
  import { MatDialog } from '@angular/material/dialog';


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


    constructor(private attorneyService: AttorneyService , @Inject(MatSnackBar) private snackBar: MatSnackBar ,  private dialog: MatDialog) {
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

    editAttorney(attorney: Attorney): void {
      // Abogado activo, puedes implementar aquí la lógica para eliminar
      this.showSuccessMessage('Abogado editado con éxito');
      console.log('Editando abogado:', attorney);
      // Agrega aquí la lógica para eliminar el abogado si es necesario
    }
    
    deleteAttorney(attorney: Attorney): void {
      this.attorneyService.deleteAttorney(attorney.id).subscribe(() => {
        // Eliminación exitosa, puedes realizar alguna lógica adicional si es necesario
        this.showSuccessMessage('Abogado eliminado con éxito');
        console.log('Eliminando abogado:', attorney);
        // Actualiza la lista de abogados después de la eliminación
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
        this.showSuccessMessage('Abogado eliminado con éxito');
          console.log('Restaurando abogado:', attorney);
        this.loadAttorneys();
      }, (error) => {
        // Maneja el error si la eliminación falla
        console.error('Error al eliminar el abogado:', error);
        // Muestra un mensaje de error
        this.showErrorSnackBar('Error al eliminar el abogado');
      });
    }
    
    showErrorSnackBar(message: string): void {
      const config = new MatSnackBarConfig();
      config.panelClass = ['custom-error-snackbar']; // Asegúrate de que coincida con el nombre de tu clase CSS
      config.horizontalPosition = 'end'; // Posición horizontal en la parte derecha
      config.verticalPosition = 'top'; // Posición vertical en la parte superior
    
      // Configura la duración en milisegundos (en este caso, 4 segundos)
      config.duration = 4000;
    
      this.snackBar.open(message, 'Cerrar', config);
    }
    
  
    

    showSuccessMessage(message: string): void {
      const config = new MatSnackBarConfig();
      config.panelClass = ['custom-success-snackbar']; // Asegúrate de que coincida con el nombre de tu clase CSS
      config.horizontalPosition = 'end'; // Posición horizontal en la parte derecha
      config.verticalPosition = 'top'; // Posición vertical en la parte superior
    
      // Configura la duración en milisegundos (en este caso, 4 segundos)
      config.duration = 4000;
    
      this.snackBar.open(message, 'Cerrar', config);
    }
    

    
  }