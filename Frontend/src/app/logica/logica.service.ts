import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API } from "../URL/URL";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LogicaService {
  
  constructor(private http: HttpClient) { }

  ejecutarCreate(entrada: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.http.post<any>(API + 'create', entrada, httpOptions);
  }

  ejecutarRead(entrada: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };
    return this.http.post<any>(API + 'read', entrada);
  }

  ejecutarUpdate(id: string, nuevosDatos: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put<any>(API + "update/" + `${id}`, nuevosDatos, httpOptions);
  }

  ejecutarDelete(id: string): Observable<any> {
    return this.http.delete(API + 'delete/' + `${id}`);
  }

}
