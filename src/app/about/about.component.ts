import { Component } from '@angular/core';

import { AppService } from '../app.service';

@Component({
    templateUrl: './about.html',
})
export class AboutComponent {

    appService: AppService;
    aboutUsContent: string;

    constructor(_appService: AppService) {
        this.appService = _appService;
    }

    ngOnInit() {
        this.appService.getAboutUs().subscribe(
            response => {
                console.log(response);
                this.aboutUsContent = response.text;
            },
            error => {
                console.log(error);
            });
    }
}
