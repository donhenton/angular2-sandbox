import {Http} from '@angular/http';
//import 'rxjs/Rx'; for all
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Restaurant} from './restaurant.interface';

@Injectable()
export class RestaurantService {

    constructor(private _http: Http)
    {

    }

    getRestaurant(id: string): Observable<Restaurant>
    {
        var url  = "http://donhenton-springmvc3.herokuapp.com:80/app/backbone/restaurant/"+id;
        return this._http.get(url)
        .map(res => res.json())
    }

}