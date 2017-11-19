import { Component, OnInit } from '@angular/core';
import { brazilianStates } from './states';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    public states;
    constructor() {
        this.states = brazilianStates;
    }

    ngOnInit() {}

}
