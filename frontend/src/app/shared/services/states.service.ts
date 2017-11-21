import { UtilsService } from './utils.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { State } from '@models/state';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class StatesService {

  constructor(
    private db: AngularFirestore,
  ) { }

  public list(): Observable<State[]> {
    return this.db.collection('states').snapshotChanges()
          .map( actions => {
            return actions.map(a => {
              const data = a.payload.doc.data() as State;
              const id = a.payload.doc.id;
              return { id, ...data };
            }).sort((a, b) => UtilsService.strcmp(a.name, b.name));
          });
  }

}
