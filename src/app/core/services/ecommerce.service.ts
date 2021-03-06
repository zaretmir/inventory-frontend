import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:9006/api/order-management/';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  constructor( private http: HttpClient ) { }

  getOrder(id: number): Observable<any> {
    // get user id
    return this.http.get(`${BASE_URL}orders/${id}`);
  }


}
