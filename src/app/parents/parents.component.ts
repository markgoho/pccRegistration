import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { AngularFire } from 'angularfire2';

import { Parent } from './parent';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.scss']
})
export class ParentsComponent implements OnInit {
  parents: Parent[];
  activeKey: string;
  appState: string;
  uid: string;
  parent = new Parent('', '', '', '', '', new Date());

  constructor (private firebaseService: FirebaseService,
                public af: AngularFire,
                private router: Router ) { }

  ngOnInit() {
    this.firebaseService.getParents()
      .subscribe(parents => this.parents = parents);

    this.af.auth.subscribe(
      authData => this.uid = authData.uid
    );
  }

  addParent(parent) {
    const createdOn = new Date().toLocaleDateString();
    parent.createdOn = createdOn;
    parent.uid = this.uid;
    console.log(parent);
    this.firebaseService.addParent(parent);
    this.changeState('default');
  }

  changeState(state:string, key:any = null) {
    console.log(`Changing state to ${state}`);
    if (key) {
      console.log(`Changing key to ${key}`);
      this.activeKey = key;
    }
    this.appState = state;
  }

  orderByProp(parentProp: string) {
    this.firebaseService.orderByProp(parentProp)
      .subscribe(parents => this.parents = parents);
  }

  goToParent(key) {
    this.router.navigate(['parent', key]);
  }

}
