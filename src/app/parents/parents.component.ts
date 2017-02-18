import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { FirebaseService } from '../firebase.service';
import { AngularFire } from 'angularfire2';
import { AuthService } from '../auth/auth.service';

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

  parent: FormGroup;

  constructor (private auth: AuthService,
                public af: AngularFire,
                private router: Router,
                private fb: FormBuilder ) { }

  ngOnInit() {
    this.af.database.list('/parents')
      .subscribe(parents => this.parents = parents);

    this.af.auth.subscribe(authData => this.uid = authData.uid);

    this.parent = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required], //todo: add phone regex validator
      email: ['', Validators.required], //todo: add email regex validator
    });
  }

  onSubmit() {
    const formValues = this.parent.value;
    formValues['fullName'] = `${formValues.firstName} ${formValues.lastName}`;
    formValues['createdOn'] = new Date().toString();
    this.af.database.object(`/parents/${this.auth.id}`).update(formValues);
    this.changeState('default');
  }

  changeState(state:string, key:string = null) {
    console.log(`Changing state to ${state}`);
    if (key) {
      console.log(`Changing key to ${key}`);
      this.activeKey = key;
    }
    this.appState = state;
  }

  goToParent(key) {
    this.router.navigate(['parent', key]);
  }

}
