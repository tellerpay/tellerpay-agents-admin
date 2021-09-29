import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TerminalsService {
  baseUrl = environment.baseUrl
  constructor(
    private http: HttpClient
  ) { }


  getTerminals(page?: number, size?: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}dashboard/terminal?${page ? '&page=' + page : ''}${size ? '&size=' + size : ''}`)
  }

  getTerminal(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}dashboard​/terminal​/${id}`)
  }

  createTerminal(terminal): Observable<any> {
    const body = {
      "name": terminal.name,
      "terminalId": terminal.id,
      "serialNo": terminal.no,
      "owner": terminal.owner
    }
    return this.http.post<any>(`${this.baseUrl}dashboard​/terminals`, body)
  }

  assignTerminal(terminalId: string, userId: string, force?: boolean): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}dashboard​/terminal​/${terminalId}​/assign​/${userId}${force ? '?force=' + force : ''}`, null)
  }
}
