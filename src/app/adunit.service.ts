import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { FormsModule } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AdunitService {
  [x: string]: any;
  uri = 'http://localhost:4000/adunites';
  constructor(private _http: Http) { }
  addProduct(newprod){
    return this._http.post('/api/newprod', newprod).map((prod:Response)=>prod.json()).toPromise();
  }
}
