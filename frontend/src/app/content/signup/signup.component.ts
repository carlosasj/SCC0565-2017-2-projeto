import { StatesService, AuthService } from '@services';
import { NewUser } from '@models';
import { Observable } from 'rxjs/Rx';
import { State } from '@models/state';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    public states: Observable<State[]>;

    public newUser = new NewUser();

    constructor(
        private statesService: StatesService,
        private authService: AuthService
    ) {
        this.states = statesService.list();
    }

    ngOnInit() {}

    public onSubmit() {

    }

    public containsUpper(str: string) {
        if (str) {
            return str.split('').some(c => c === c.toUpperCase());
        } else {
            return false;
        }
    }

    public containsLower(str: string) {
        if (str) {
            return str.split('').some(c => c === c.toLowerCase());
        } else {
            return false;
        }
    }

    public containsSpecial(str: string) {
        if (str) {
            const chars = '~`!@#$%^&*_-+={[(<>)]}:;"\'\\|,./?';
            return str.split('').some(c => chars.includes(c));
        } else {
            return false;
        }
    }

    public containsDigit(str: string) {
        if (str) {
            const numbers = '1234567890';
            return str.split('').some(c => numbers.includes(c));
        } else {
            return false;
        }
    }


}
