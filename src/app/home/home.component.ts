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

    constructor(_appService: AppService) {
        this.appService = _appService;
    }

    ngOnInit() {
        this.getBothSliders();
    }

    getBothSliders() {
        let count = 0;
        let productCount = 0;
        this.appService.getSliderByCategory().subscribe(
            response => {
                for (let i = 0; i < response.length; i++) {
                    if (response[i].type == "1") {
                        if (count === 0) {
                            response[i].class = "item active";
                        } else {
                            response[i].class = "item";
                        }
                        count++;
                        this.homeSlider.push(response[i]);
                    } else {
                        if (productCount === 0) {
                            response[i].class = "item active";
                        } else {
                            response[i].class = "item";
                        }
                        productCount++;
                        this.productSilder.push(response[i]);
                    }
                }
                setTimeout(() => {
                    $('#carousel-div').carousel({
                        interval: 5000
                    });

                    $('#product-carousel-div').carousel({
                        interval: 5000
                    });

                    // $('.flexslider').flexslider({
                    //     animation: "slide",
                    //     animationLoop: true,
                    //     itemWidth: 400,
                    //     pausePlay: false,
                    //     slideshow: true,
                    //     slideshowSpeed: 5000,
                    //     pauseOnAction: false,
                    //     start: function () {
                    //         $('body').removeClass('loading');
                    //     }
                    // });
                }, 10);
            }, error => {
                console.log(error);
            });
    }
}
