import { Component } from '@angular/core';
declare var $: any;

@Component({
    templateUrl: './home.html',
})
export class HomeComponent {
    homeSlider: any;

    ngOnInit() {
        this.generateSlider();

        $('#carousel-div').carousel({
            interval: 5000
        });

        $('.flexslider').flexslider({
            animation: "slide",
            animationLoop: true,
            itemWidth: 200,
            itemMargin: 15,
            pausePlay: false,
            slideshow: true,                //Boolean: Animate slider automatically
            slideshowSpeed: 5000,
            pauseOnAction: false,
            start: function () {
                $('body').removeClass('loading');
            }
        });
    }

    generateSlider() {
        this.homeSlider = [{
            class: "item active",
            heading1: "Multi Pager Template",
            heading2: "Muti Purpose Use"
        },{
            class: "item",
            heading1: "Awesome Usage",
            heading2: "Bootstrap 3.2"
        },{
            class: "item",
            heading1: "Easy To Customize",
            heading2: "Free To Download"
        }]
    }
}
