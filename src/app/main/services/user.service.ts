import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class UserService {

    private baseUrl: string = "http://localhost:8080/api/v1";

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor( private http: HttpClient ) { }

    getAllUsers(): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/users`);
    }

    getUserById( userId: any ): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/users/${userId}`, this.httpOptions);
    }
  
}