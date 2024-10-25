import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
        providedIn: 'root'
}) 
export class DataService {
    private readonly _http = inject(HttpClient);
    private readonly _apiUrl = 'https://fakestoreapi.com/products/';


    getProduct():Observable<any> {
        return this._http.get<any>(this._apiUrl);
    }
}   