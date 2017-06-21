import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app.service';

import * as _ from 'lodash';

@Component({
    templateUrl: './category.html',
})
export class CategoryComponent {

    appService: AppService;
    categories = <any>[];
    hideLoader: boolean = false;

    constructor(_appService: AppService, private router: Router) {
        this.appService = _appService;
    }

    ngOnInit() {
        this.appService.getCategorySlider().subscribe(
            response => {
                this.categories = _.chunk(response, 2);
                this.hideLoader = true;
            },
            error => {
                console.log(error);
                this.hideLoader = true;
            });
    }

    getProducts(categoryId: number) {
        this.router.navigate(['product', categoryId]);
    }
}
