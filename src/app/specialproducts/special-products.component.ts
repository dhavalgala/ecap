import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../app.service';

import * as _ from 'lodash';

@Component({
    templateUrl: './special-products.html',
})
export class SpecialProductsComponent {

    appService: AppService;
    products = <any>[];
    showNoProducts: boolean = false;
    hideLoader: boolean = false;

    constructor(_appService: AppService, private route: ActivatedRoute) {
        this.appService = _appService;
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.products = <any>[];
            this.showNoProducts = false;
            this.hideLoader = false;
            let categoryId = params['categoryId'];
            this.getProductDetail(categoryId);
        });
        // let categoryId = +this.route.snapshot.params['categoryId'];
        // console.log(categoryId);
    }

    getProductDetail(categoryId: number) {
        this.appService.getSpecialProductsByCategory(categoryId).subscribe(
            response => {
                this.products = response;
                if (this.products.length == 0) {
                    this.showNoProducts = true;
                }
                this.hideLoader = true;
            },
            error => {
                console.log(error);
                this.hideLoader = true;
            });
    }

}
