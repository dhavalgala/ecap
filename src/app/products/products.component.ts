import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppService } from '../app.service';

import * as _ from 'lodash';

@Component({
    templateUrl: './products.html',
})
export class ProductsComponent {

    appService: AppService;
    products = <any>[];
    showNoProducts: boolean = false;
    hideLoader: boolean = false;

    constructor(_appService: AppService, private route: ActivatedRoute) {
        this.appService = _appService;
    }

    ngOnInit() {
        let categoryId = +this.route.snapshot.params['categoryId'];
        this.appService.getProductsByCategory(categoryId).subscribe(
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
