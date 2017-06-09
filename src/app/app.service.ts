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

    constructor(private _http: Http) { }

    getSliderByCategory() {
        return this._http.get(this.serverUrl + "json/getAllSliderWithoutPagination")
            .map(res => res.json());
    }

    getAboutUs() {
        return this._http.get(this.serverUrl + "json/getAboutUsContent")
            .map(res => res.json());
    }

    getAllCategory() {
        return this._http.get(this.serverUrl + "json/getAllCategory")
            .map(res => res.json());
    }

    submitEnquiry(obj: any) {
        return this._http.post(this.serverUrl + "json/getContactInfo", obj).map(res => res.json());
    }
}