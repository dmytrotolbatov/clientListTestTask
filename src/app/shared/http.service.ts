import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  private url: string = 'assets/clients.json';

  /**
   * @param {Http} http
   */
  constructor( private http: Http ) {}

  /**
   * @returns {Observable<Response>}
   */
  public fetchAll(): Observable<any> {
    return this.http.get(this.url);
  }
}
