import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class JobTypeService {
    baseUrl = "http://localhost:8080/jobtypes"
    constructor(private http: HttpClient) { }

    //GET Method
  public getAllJobTypes(): Observable<any> {
    console.log("Get All JobTypes");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAll`, { headers, responseType: 'json' });
  }
}
export class JobType {
  job_type: string;
}