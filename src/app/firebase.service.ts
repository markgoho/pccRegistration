import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Parent } from './parents/parent';

@Injectable()
export class FirebaseService {
  parents: FirebaseListObservable<Parent[]> = this.af.database.list('/parents') as FirebaseListObservable<Parent[]>;

  constructor(private af: AngularFire) { }

  getParents() {
    return this.parents;
  }

  addParent(parent) {
    return this.parents.push(parent)
  }

  orderByProp(parentProp: string) {
    this.parents = this.af.database.list('/parents', { query: { orderByChild: parentProp }});
    return this.parents;
  }
}
