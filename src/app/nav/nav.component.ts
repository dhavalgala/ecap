import { Component } from '@angular/core';

import { AppService } from '../app.service';

@Component({
    selector: 'nav-component',
    templateUrl: './nav.html',
})
export class NavComponent {
    specialCategory = <any>[];

    constructor(private appService: AppService) { }

    ngOnInit() {
        this.appService.getSpecialCategory().subscribe(
            response => {
                this.specialCategory = response;
            },
            error => {
                console.log(error);
            });
    }
}
