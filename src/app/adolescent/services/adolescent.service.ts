import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@soa/env/environment.development';
import { adolescent } from '../model/adolescent.model';
import { addressModel } from '../model/address.model';

@Injectable({
  providedIn: 'root'
})
export class AdolescentService {

  private url = `http://localhost:8093/adolescente`;
  private urlAddress = `http://localhost:8092/v1/address`
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<adolescent[]>(this.url+"/list");
  }

  findAllInactive(){
    return this.http.get<adolescent[]>(this.url+"/listI");
  }

  SaveAttorney(attorney: any){
    return this.http.post(`${this.url}/save`, attorney);
  }

  saveAddress(address: addressModel){
    return this.http.post(`${this.urlAddress}`,address)
  }


  UpdateAttornet(attorney: any, idAttoney: number){
    
    const path = `${this.url}/${idAttoney}`;
    return this.http.put(`${this.url}/updadte/${idAttoney}`, attorney )
  }

  public DeleteAttorney(id: number){
    return this.http.delete(this.url + "/delete/" + id)
  }

  restore(idrestore:any){
    return this.http.put(`${this.url}/restore/${idrestore}`,undefined)
  }
}
