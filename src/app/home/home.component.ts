import { Component } from '@angular/core';
import { AppService } from '../app.service';

declare var $: any;

@Component({
    templateUrl: './home.html'
})

export class HomeComponent {

    homeSlider: any[] = [];
    productSilder: any[] = [];
    appService: AppService;
    hideLoader: boolean = false;

    constructor(_appService: AppService) {
        this.appService = _appService;
    }

    ngOnInit() {
        this.getBothSliders();
    }

    getBothSliders() {
        let count = 0;
        let productCount = 0;
        this.appService.getCategorySlider().subscribe(
            response => {
                for (let i = 0; i < response.length; i++) {
                    if (count === 0) {
                        response[i].class = "item active";
                    } else {
                        response[i].class = "item";
                    }
                    count++;
                    this.homeSlider.push(response[i]);
                }
                setTimeout(() => {
                    $('#carousel-div').carousel({
                        interval: 5000
                    });
                }, 10);
                this.hideLoader = true;
            }, error => {
                console.log(error);
                this.hideLoader = true;
            });

        this.appService.getSpecialProductSlider().subscribe(
            response => {
                for (let i = 0; i < response.length; i++) {
                    if (productCount === 0) {
                        response[i].class = "item active";
                    } else {
                        response[i].class = "item";
                    }
                    productCount++;
                    this.productSilder.push(response[i]);
                }
                setTimeout(() => {
                    $('#product-carousel-div').carousel({
                        interval: 5000
                    });
                }, 10);
            }, error => {
                console.log(error);
            });
    }
}
