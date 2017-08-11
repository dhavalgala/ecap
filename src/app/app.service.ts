import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class AppService {

    // private serverUrl = 'http://localhost/ecapBackend/index.php/';
    private serverUrl = 'https://ecap.net.in/admin/index.php/';

    constructor(private _http: Http) { }

    getCategorySlider() {
        return this._http.get(this.serverUrl + 'json/getAllSliderWithoutPagination')
            .map(res => res.json());
    }

    getSpecialProductSlider() {
        return this._http.get(this.serverUrl + 'json/getSpecialProductSlider')
            .map(res => res.json());
    }

    getAboutUs() {
        return this._http.get(this.serverUrl + 'json/getAboutUsContent')
            .map(res => res.json());
    }

    getAllCategory() {
        return this._http.get(this.serverUrl + 'json/getAllCategory')
            .map(res => res.json());
    }

    getSpecialCategory() {
        return this._http.get(this.serverUrl + 'json/getSpecialCategory')
            .map(res => res.json());
    }

    getProductsByCategory(categoryId: number) {
        return this._http.get(this.serverUrl + 'json/getProductsByCategory?category=' + categoryId)
            .map(res => res.json());
    }

    getSpecialProductsByCategory(categoryId: number) {
        return this._http.get(this.serverUrl + 'json/getSpecialProductsByCategory?category=' + categoryId)
            .map(res => res.json());
    }

    submitEnquiry(obj: any) {
        return this._http.post(this.serverUrl + 'json/getContactInfo', obj).map(res => res.json());
    }
}