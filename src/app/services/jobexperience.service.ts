import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class JobExperienceService {
    baseUrl = "http://localhost:8080/jobexperience"
    constructor(private http: HttpClient) { }

    //GET Method
  public getAllJobExperiences(): Observable<any> {
    console.log("Get All JobExperiences");
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${this.baseUrl}/getAll`, { headers, responseType: 'json' });
  }
}
export class JobExperiences {
  job_exp: string;
}