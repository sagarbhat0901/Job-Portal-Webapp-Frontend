import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class WorkTypeService {
    baseUrl = "http://localhost:8080/worktypes"
    constructor(private http: HttpClient) { }

    //GET Method
  public getAllWorkTypes(): Observable<any> {
    console.log("Get All WorkTypes");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAll`, { headers, responseType: 'json' });
  }
}
export class WorkType {
  work_type: string;
}