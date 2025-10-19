import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = '/api/users';

  constructor(private http: HttpClient) {}

  // POST: Create a new user
  createUser(user: User): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.http.post(this.apiUrl, user, { headers });
  }
}