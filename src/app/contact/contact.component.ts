import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppService } from '../app.service';

@Component({
    templateUrl: './contact.html',
})
export class ContactComponent {

    enquiryModel: any;
    envVars: FormArray;
    form: FormGroup;
    appService: AppService;
    fb: FormBuilder;

    categories: any[];
    showErrorMsg: boolean = false;
    showSuccessMsg: boolean = false;

    constructor(private formBuilder: FormBuilder, _appService: AppService) {
        this.fb = formBuilder;
        this.appService = _appService;
        this.initializeForm();
    }

    ngOnInit() {
        this.appService.getAllCategory().subscribe(
            response => {
                if (response && response.length > 0) {
                    response.unshift({ id: "", name: "Select Category" });
                }
                this.categories = response;
            },
            error => {
                console.log(error);
            }
        )
    }

    initializeForm() {
        this.envVars = this.fb.array([this.fb.group({
            value: "",
            voltage: "",
            category: "",
            misc: ""
        })]);

        this.form = this.fb.group({
            name: ["", Validators.required],
            email: ["", [Validators.required, Validators.email]],
            contact: ["", Validators.required],
            productEnquiry: this.envVars
        });

        this.form.valueChanges.subscribe(data => this.onValueChanged(data));
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
        this.envVars.controls.splice(index, 1);
        this.form.value.productEnquiry.splice(index, 1);
    }

    submitEnquiry() {
        let isValid = true;
        for (let i = 0; i < this.form.value.productEnquiry.length; i++) {
            let row = this.form.value.productEnquiry[i];
            if (i === 0 && !row["value"] && !row["category"]) {
                isValid = false;
                this.showErrorMsg = true;
                break;
            } else if (i !== 0 && !row["value"] && !row["category"]) {
                this.deleteEnvVar(i);
            }
        }

        if (isValid) {
            this.appService.submitEnquiry(this.form.value).subscribe(
                response => {
                    if (response) {
                        this.showSuccessMsg = true;
                        this.initializeForm();
                    }
                },
                error => {
                    console.log(error);
                });
        }
        setTimeout(() => {
            this.showErrorMsg = false;
            this.showSuccessMsg = false;
        }, 5000);
    }

    onValueChanged(formValue: any) {
        let x = formValue.productEnquiry.length - 1;
        if (formValue.productEnquiry[x]["value"] && formValue.productEnquiry[x]["category"]) {
            this.addEnvVar();
        }
    }
}
