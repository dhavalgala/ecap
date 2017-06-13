import { Component } from '@angular/core';

import { AppService } from '../app.service';

@Component({
    templateUrl: './about.html',
})
export class AboutComponent {

    appService: AppService;
    aboutUsContent: string;
    hideLoader: boolean = false;

    constructor(_appService: AppService) {
        this.appService = _appService;
    }

    ngOnInit() {
        this.appService.getAboutUs().subscribe(
            response => {
                this.aboutUsContent = response.text;
                this.hideLoader = true;
            },
            error => {
                console.log(error);
                this.hideLoader = true;
            });
    }
}
