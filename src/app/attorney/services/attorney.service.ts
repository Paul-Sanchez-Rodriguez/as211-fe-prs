// attorney.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Attorney } from '@soa/attorney/model/attorney.model';

@Injectable({
  providedIn: 'root'
})
export class AttorneyService {
  private apiUrl = 'http://localhost:8080/v1/attorney';

  constructor(private http: HttpClient) {}

  getAttorneys(): Observable<Attorney[]> {
    return this.http.get<Attorney[]>(this.apiUrl);
  }

  restoreAttorney(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/restore/${id}`, {});
  }

  deleteAttorney(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  updateAttorney(id: number, attorneyData: Attorney): Observable<Attorney> {
    return this.http.put<Attorney>(`${this.apiUrl}/${id}`, attorneyData);
  }

  createAttorney(attorneyData: Attorney): Observable<Attorney> {
    return this.http.post<Attorney>(`${this.apiUrl}`, attorneyData);
  }

  getInactiveAttorneys(): Observable<Attorney[]> {
    return this.http.get<Attorney[]>(`${this.apiUrl}/inactive`);
  }
  

}
