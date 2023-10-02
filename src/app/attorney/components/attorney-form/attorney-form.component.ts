import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Attorney } from '@soa/attorney/model/attorney.model';
import { AttorneyService } from '@soa/attorney/services/attorney.service';

@Component({
  selector: 'app-attorney-form',
  templateUrl: './attorney-form.component.html',
  styleUrls: ['./attorney-form.component.scss']
})
export class AttorneyFormComponent implements OnInit {
  attorneyForm: FormGroup;
  @Inject(MAT_DIALOG_DATA) public data!: Attorney 

  constructor(private fb: FormBuilder ,  private dialogRef: MatDialogRef<AttorneyFormComponent>,private attorneyService: AttorneyService) {
    this.attorneyForm = this.fb.group({
      name: ['', Validators.required],
      fatherlastname: ['', Validators.required],
      motherlastname: ['', Validators.required],
      dni: ['', Validators.required],
      cellphone: ['', Validators.required],
      address: ['', Validators.required],
      active: ['']
    });
  }

  ngOnInit() {
    if (this.data) {
      // Si hay datos de abogado disponibles, llena el formulario con estos datos
      this.attorneyForm.setValue({
        name: this.data.name,
        fatherlastname: this.data.fatherlastname,
        motherlastname: this.data.motherlastname,
        dni: this.data.dni,
        cellphone: this.data.cellphone,
        address: this.data.address,
        active: this.data.active
      });
    }
  }  

  onSubmit() {
    if (this.attorneyForm.valid) {
      const attorneyData = this.attorneyForm.value;
      // Llama al servicio para crear un nuevo apoderado
      this.attorneyService.createAttorney(attorneyData).subscribe((newAttorney) => {
        console.log('Apoderado registrado con éxito:', newAttorney);
        // Cierra el diálogo después de registrar con éxito
        this.dialogRef.close(newAttorney);
      }, (error) => {
        console.error('Error al registrar el apoderado:', error);
        // Maneja el error aquí, por ejemplo, muestra un mensaje de error al usuario
      });
    }
  }

  onCancel() {
    this.dialogRef.close();
  }
  
}
