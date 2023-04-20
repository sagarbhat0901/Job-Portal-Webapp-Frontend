import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class QualificationRequiredService {
    baseUrl = "http://localhost:8080/qualificationrequired"
    constructor(private http: HttpClient) { }

    //GET Method
  public getAllQualificationRequireds(): Observable<any> {
    console.log("Get All QualificationRequireds");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAll`, { headers, responseType: 'json' });
  }
}
export class QualificationRequired {
  qualification_type: string;
}