import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

  export class Service {

    private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    constructor(private http:HttpClient) {}
  
  
  
    getAlluserdetails(): Observable<any>{
      return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
  
  
    // toget a specific user
    getUserById(userId: string): Observable<any> {
      const url = `${this.apiUrl}/${userId}`;
      return this.http.get(url);
    }
  
    // post method
    createRecord(record: any): Observable<any> {
      return this.http.post(`${this.apiUrl}`, record);
    }
    deleteUser(userId: any): Observable<any> {
      const url = `${this.apiUrl}/${userId}`;
      return this.http.get(url);
    }
  }
 

