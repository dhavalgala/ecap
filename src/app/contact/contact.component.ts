import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
    templateUrl: './contact.html',
})
export class ContactComponent {

    enquiryModel: any;
    envVars: FormArray;

    constructor(private fb: FormBuilder) {
        this.envVars = fb.array([fb.group({
            value: "",
            voltage: "",
            category: "",
            misc: ""
        })]);
    }

    ngOnInit() {
        // this.enquiryModel = [];
        // for (let i = 0; i < 10; i++) {
        //     if (i == 0) {
        //         this.enquiryModel.push({
        //             value: "",
        //             voltage: "",
        //             category: "",
        //             misc: "",
        //             isVisible: true
        //         });
        //     } else {
        //         this.enquiryModel.push({
        //             value: "",
        //             voltage: "",
        //             category: "",
        //             misc: "",
        //             isVisible: false
        //         });
        //     }
        // }
    }

    isFilled(index: number) {
        if (this.enquiryModel[index].value && this.enquiryModel[index].category) {
            this.enquiryModel[index + 1].isVisible = true;
        }
    }

    addEnvVar() {
        this.envVars.push(this.fb.group({
            value: "",
            voltage: "",
            category: "",
            misc: ""
        }));
    }

    deleteEnvVar(index: number) {
        if (this.envVars.length > 1) {
            this.envVars.removeAt(index);
        }
    }

    submitEnquiry() {
        console.log(this.envVars);
    }
}
