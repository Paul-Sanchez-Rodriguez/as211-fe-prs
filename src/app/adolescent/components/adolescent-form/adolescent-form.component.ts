import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdolescentService } from '@soa/adolescent/services/adolescent.service';
import { adolescent } from '../../model/adolescent.model';
import { addressModel } from '@soa/adolescent/model/address.model';

@Component({
  selector: 'app-adolescent-form',
  templateUrl: './adolescent-form.component.html',
  styleUrls: ['./adolescent-form.component.scss']
})
export class AdolescentFormComponent {
  adolescentForm!: FormGroup;
  addressdata: any;
  addressImput: boolean = true;
  addressForm !: FormGroup;

  constructor(private fb: FormBuilder, private adolescentService: AdolescentService, private router: Router,
    public dialogRef: MatDialogRef<AdolescentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    this.adolescentForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      paternal_last_name: ['', Validators.required],
      maternal_last_name: ['', Validators.required],
      active: ['A', Validators.required],
      birthday: ['', Validators.required],
      contact_information: ['',  Validators.compose([Validators.required, Validators.minLength(9)])],
      crime_committed: ['', Validators.required],
      date_of_admission: ['', Validators.required],
      document_number: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      document_type: ['', Validators.required],
      gender: ['', Validators.required],
    });

    this.addressForm = this.fb.group({
      id: [''],
      address: [''],
      idadolescent: [0]
    })

    if (this.data) {
      this.addressImput = false
      this.addressdata = this.data.address
      this.update()
    }
  }

  saveAttorney(): void {

    this.adolescentService.SaveAttorney(this.adolescentForm.value).subscribe((res: any) => {

      this.addressForm.patchValue({ idadolescent: res.id})

      this.adolescentService.saveAddress(this.addressForm.value).subscribe(res)

      this.adolescentForm.reset();
      this.addressForm.reset();

    }, error => {
      console.log("Error => ", error)
    })
  }

  saveAndUpdate() {
    if (this.data) {
      this.adolescentService.UpdateAttornet(this.adolescentForm.value, this.adolescentForm.value.id).subscribe(res => {
        
        if(this.addressForm.value.address){

          this.addressForm.patchValue({ idadolescent: this.adolescentForm.value.id})
          this.adolescentService.saveAddress(this.addressForm.value).subscribe(res)

        }
        
        this.adolescentForm.reset();
        this.addressForm.reset();
        this.onNoClick()
      });
    } else {
      this.saveAttorney()
      this.onNoClick()
    }
  }


  onNoClick(): void {
    this.dialogRef.close();
  }


  update() {
    console.log(this.data)
    this.adolescentForm.patchValue({
      id: this.data.id,
      name: this.data.name,
      paternal_last_name: this.data.paternal_last_name,
      maternal_last_name: this.data.maternal_last_name,
      birthday: this.data.birthday,
      contact_information: this.data.contact_information,
      crime_committed: this.data.crime_committed,
      date_of_admission: this.data.date_of_admission,
      document_number: this.data.document_number,
      document_type: this.data.document_type,
      gender: this.data.gender,
      active: 'A'
    });
  }
}
