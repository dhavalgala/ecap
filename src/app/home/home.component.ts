import { Component } from '@angular/core';
declare var $: any;

@Component({
    templateUrl: './home.html',
})
export class HomeComponent {
    ngOnInit() {
        $('#carousel-div').carousel({
            interval: 5000 //TIME IN MILLI SECONDS
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
}
