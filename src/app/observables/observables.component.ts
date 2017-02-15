import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
  parents$: FirebaseListObservable<any[]>;


  constructor(public af: AngularFire) {
    this.parents$ = af.database.list('/parents');
  }

  ngOnInit() {
    this.parents$.subscribe(parent => console.log(parent));
  }

}
