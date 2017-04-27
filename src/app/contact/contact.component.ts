import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './contact.html',
})
export class ContactComponent {

    enquiryModel: any;
    envVars: FormArray;
    form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.envVars = fb.array([fb.group({
            value: "",
            voltage: "",
            category: "",
            misc: ""
        })]);

        this.form = fb.group({
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
        console.log(this.form.value);
    }

    onValueChanged(formValue: any) {
        let x = formValue.productEnquiry.length - 1;
        if (formValue.productEnquiry[x]["value"] && formValue.productEnquiry[x]["category"]) {
            this.addEnvVar();
        }
    }
}
