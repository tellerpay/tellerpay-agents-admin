import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = environment.baseUrl
  constructor(
    private http: HttpClient
  ) { }


  getAllUsers(pageNum:number, pageSize:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}dashboard/users/all?pageNum=${pageNum}&size=${pageSize}`)
  }
  getUser(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}dashboard/users/${id}`)
  }
}
