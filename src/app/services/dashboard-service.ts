
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the User interface based on the API response
export interface User1 {
    id: number;
    name: string;
    company: string;
    username: string;
    email: string;
    address: string;
    zip: string;
    state: string;
    country: string;
    phone: string;
    photo: string;
}

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    private apiUrl = 'https://fake-json-api.mock.beeceptor.com/users';

    constructor(private http: HttpClient) { }

    // Fetch all users
    getUsers(): Observable<User1[]> {
        return this.http.get<User1[]>(this.apiUrl);
    }
}