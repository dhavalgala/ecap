import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx'

@Injectable()
export class AppService {

    // private serverUrl = "http://localhost/ecapBackend/index.php/";
    // private serverUrl = "http://halb.tk/admin/index.php/";
    private serverUrl = "http://www.ecap.net.in/admin/index.php/";

    private headers = new Headers();

    constructor(private _http: Http) {
        this.headers.append('Accept', 'application/json');
        this.headers.append('Content-Type', 'application/json');
    }

    getSliderByCategory() {
        return this._http.get(this.serverUrl + "json/getAllSliderWithoutPagination", { headers: this.headers })
            .map(res => res.json());
    }

    getAboutUs() {
        return this._http.get(this.serverUrl + "json/getAboutUsContent", { headers: this.headers })
            .map(res => res.json());
    }

    getAllCategory() {
        return this._http.get(this.serverUrl + "json/getAllCategory", { headers: this.headers })
            .map(res => res.json());
    }

    submitEnquiry(obj: any) {
        return this._http.post(this.serverUrl + "json/getContactInfo", obj,
            { headers: this.headers }).map(res => res.json());
    }

}