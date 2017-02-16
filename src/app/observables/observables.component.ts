import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
  parents$: FirebaseListObservable<any[]>;
  property: string;
  parent$: FirebaseObjectObservable<any>;
  parentProps$: Observable<any[]>;
  propSubject: BehaviorSubject<any> = new BehaviorSubject('email');

  constructor(public af: AngularFire) {
    this.parent$ = af.database.object('/parents/-Kd7gd392Igs1S8nsyqX');
    this.parentProps$ = this.parent$.map(parent => Object.getOwnPropertyNames(parent));
    this.parents$ = this.af.database.list('/parents', 
      { 
        query: { 
          orderByChild: this.propSubject
        }
    });
    
  }

  ngOnInit() {
    this.propSubject.next('email');
  }

  orderByChild(property: string) {
    console.log(property);
    this.propSubject.next(property);
  }
}
