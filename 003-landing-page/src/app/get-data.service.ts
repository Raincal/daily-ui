import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GetDataService {

  constructor(private http: Http) { }

  getTitleList(url): Observable<Object[]> {
    return this.http.get(url)
      .map(res => <Object[]>res.json().results.slice(0, 5))
      .catch(err => Observable.throw(err));
  }

}
