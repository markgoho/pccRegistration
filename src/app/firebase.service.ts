import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Parent } from './parents/parent';

@Injectable()
export class FirebaseService {
  parents: FirebaseListObservable<Parent[]> = this.af.database.list('/parents');

  constructor(private af: AngularFire) { }

  getParents(): FirebaseListObservable<Parent[]> {
    return this.parents;
  }

  addParent(parent: Parent) {
    this.parents.push(parent);
  }

  editParent(key: string, parent: Parent) {
    this.parents.update(key, parent);
  }

  deleteParent(key: string) {
    this.parents.remove(key);
  }

  orderByProp(parentProp: string): FirebaseListObservable<Parent[]> {
    this.parents = this.af.database.list('/parents', { 
      query: { orderByChild: parentProp }
    });
    return this.parents;
  }
}
