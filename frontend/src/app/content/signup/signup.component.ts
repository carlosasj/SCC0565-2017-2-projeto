import { StatesService, AuthService, UtilsService as utils } from '@services';
import { NewUser, Choice } from '@models';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    public states: Observable<Choice[]>;
    public success: string[] = [];
    public errors: string[] = [];

    public newUser = new NewUser();

    constructor(
        private statesService: StatesService,
        private authService: AuthService
    ) {
        this.states = statesService.list();
    }

    private chars = '~`!@#$%^&*_-+={[(<>)]}:;"\'\\|,./?';
    private numbers = '1234567890';
    private excludes = this.chars + this.numbers;

    ngOnInit() {}

    public onSubmit() {
        if (!this.isValid()) { return false; }

        this.success = [];
        this.errors = [];
        this.newUser.full_name = this.newUser.full_name.toUpperCase();
        this.newUser.city = this.newUser.city.toUpperCase();
        this.authService.newUser(this.newUser).subscribe(
            () => this.success = ['Usuário criado com sucesso'],
            () => this.errors = ['Ocorreu um erro']
        );
    }

    public containsUpper() {
        const str = this.newUser.password;
        if (str) {
            return str.split('').filter(c => !this.excludes.includes(c)).some(c => c === c.toUpperCase());
        } else {
            return false;
        }
    }

    public containsLower() {
        const str = this.newUser.password;
        if (str) {
            return str.split('').filter(c => !this.excludes.includes(c)).some(c => c === c.toLowerCase());
        } else {
            return false;
        }
    }

    public containsSpecial() {
        const str = this.newUser.password;
        if (str) {
            return str.split('').some(c => this.chars.includes(c));
        } else {
            return false;
        }
    }

    public containsDigit() {
        const str = this.newUser.password;
        if (str) {
            return str.split('').some(c => this.numbers.includes(c));
        } else {
            return false;
        }
    }

    public isValid(): boolean {
        return (
            this.containsUpper() &&
            this.containsLower() &&
            this.containsSpecial() &&
            this.containsDigit() &&
            utils.exists(this.newUser.full_name) &&
            utils.exists(this.newUser.birthday) &&
            utils.exists(this.newUser.city) &&
            utils.exists(this.newUser.state) &&
            utils.exists(this.newUser.phone) &&
            this.newUser.password === this.newUser.passwordVerification
        );
    }


}
