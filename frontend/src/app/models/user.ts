import { UtilsService } from '@services';
import { State } from './state';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';

export class User {
  fullName: string;
  birthdate: number;
  city: string;
  state: string;
  phone: string;
  email: string;

  constructor(data?) {
    if (data) {
      this.fullName = data.fullName;
      this.birthdate = data.birthdate;
      this.city = data.city;
      this.phone = data.phone;
      this.email = data.email;
      this.state = data.state;
    }
    return this;
  }

  private getPureData(): any {
    return {
      fullName:  this.fullName,
      birthdate: this.birthdate,
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
