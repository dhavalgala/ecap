import { Component } from '@angular/core';

import { AppService } from '../app.service';

import * as _ from 'lodash';

@Component({
    templateUrl: './products.html',
})
export class ProductsComponent {

    appService: AppService;
    categories = <any>[];

    constructor(_appService: AppService) {
        this.appService = _appService;
    }

    ngOnInit() {
        this.appService.getSliderByCategory().subscribe(
            response => {
                _.each(response, (n) => {
                    if (n.type === '1') {
                        this.categories.push(n);
                    }
                });
                this.categories = _.chunk(this.categories, 2);
            },
            error => {
                console.log(error);
            });
    }
}
