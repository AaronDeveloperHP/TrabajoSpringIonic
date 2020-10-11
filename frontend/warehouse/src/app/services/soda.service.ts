import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Soda } from '../models/soda';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};
const apiUrl = 'http://localhost:8080/api/sodas';

@Injectable({
  providedIn: 'root'
})

export class SodaService {
  currentSodaId: number;

  constructor(private http: HttpClient) { }
setCurrentSodaId(id:number){
  this.currentSodaId=id;
}
getCurrentSodaId():number{
  return this.currentSodaId;
}
getSodaById(id:number):Observable<Soda> {
  return this.http.get<Soda>(apiUrl+"/"+id);
} 

  getSodas(): Observable<Soda[]> {
    return this.http.get<Soda[]>(apiUrl);
  };

  deleteSoda(id: number): Observable<any>{
    return this.http.delete(apiUrl + "/" + id);
  }

  addSoda(soda: Soda): Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("productName", soda.productName);
    bodyEncoded.append("productQuantity", soda.productQuantity.toString());
    bodyEncoded.append("productFormat", soda.productFormat);
    bodyEncoded.append("productPack", soda.productPack.toString());
    let body = bodyEncoded.toString();

    return this.http.post(apiUrl, body, httpOptions);
  }
  updateSoda(id:number,soda:Soda):Observable<any>{
    let bodyEncoded = new URLSearchParams();
    bodyEncoded.append("productName", soda.productName);
    bodyEncoded.append("productQuantity", soda.productQuantity.toString());
    let body = bodyEncoded.toString();
return this.http.put(apiUrl+"/"+id, body, httpOptions);
  }
}
