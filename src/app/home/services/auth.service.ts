import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Client } from "../interfaces/client.interface";
import { Credentials } from "../interfaces/credentials.interface";

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
  
    basePath = 'http://localhost:8080/api/v1/users/auth';
  
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    constructor(private http: HttpClient) { }
  
    login(credentials: Credentials): Observable<any> {
      return this.http.post(`${this.basePath}/sign-in`, credentials ,this.httpOptions);
    }
  
    registerClient(client: Client): Observable<any>{
      return this.http.post(`${this.basePath}/sign-up`, client ,this.httpOptions);
    }
  
  }