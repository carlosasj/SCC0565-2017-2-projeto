import { UtilsService } from '@services';
import * as moment from 'moment';

export class User {
  full_name: string;
  birthday: string; // YYYY-MM-DD
  city: string;
  state: string;
  phone: string;
  email: string;

  constructor(data?) {
    if (data) {
      this.full_name = data.full_name;
      this.birthday = data.birthday;
      this.city = data.city;
      this.phone = data.phone;
      this.email = data.email;
      this.state = data.state;
    }
    return this;
  }

  private getPureData(): any {
    return {
      full_name: this.full_name,
      birthday:  this.birthday,
      state:     this.state,
      city:      this.city,
      phone:     this.phone,
      email:     this.email,
    };
  }
}

export class NewUser extends User {
  password: string;
  passwordVerification: string;

  constructor(data?) {
    if (data) {
      super(data);
      this.password = data.password;
      this.passwordVerification = data.passwordVerification;
    }

    return this;
  }

  public toUser() {
    return new User(this);
  }

  // ATENÇÃO: Não sobrescreva o método `getPureData()` ou `prepareToSave()`
  // para incluir os campos de senha, porque isso seria um problema grave de
  // segurança.
}
