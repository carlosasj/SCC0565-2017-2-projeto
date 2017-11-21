import { Provider } from '@angular/core';
import {
  AuthService,
  StatesService,
  UtilsService,
} from '@services';


export const providers: Provider[] = [
  AuthService,
  StatesService,
  UtilsService,
];
