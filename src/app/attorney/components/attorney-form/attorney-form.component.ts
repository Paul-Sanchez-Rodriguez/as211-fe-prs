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
  attorneyForm!: FormGroup;
  

  constructor(private fb: FormBuilder ,  private dialogRef: MatDialogRef<AttorneyFormComponent>,private attorneyService: AttorneyService, 
    @Inject(MAT_DIALOG_DATA) public data: any ) {}

  ngOnInit() {

    this.attorneyForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      fatherlastname: ['', Validators.required],
      motherlastname: ['', Validators.required],
      dni: ['', Validators.required],
      cellphone: ['', Validators.required],
      address: ['', Validators.required],
      active: ['']
    });

    if (this.data) {
      this.extraction();
      
    }

  }  


  saveAndUpdate(){
    if(this.data){

      this.attorneyService.updateAttorney(this.attorneyForm.value.id,this.attorneyForm.value).subscribe(res =>{
        this.attorneyForm.reset();
        this.dialogRef.close(res);
      })

    }else{
      this.onSubmit()
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
  

  extraction(){
      this.attorneyForm.patchValue({
        id: this.data.id,
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
