import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  activeKey: string;
  appState: string;

  student: any = null;

  parents$: FirebaseListObservable<any[]>
  students$: FirebaseListObservable<any[]>

  constructor(public af: AngularFire) {
    this.students$ = af.database.list('/students');
    this.parents$ = af.database.list('/parents');
  }

  ngOnInit() {
  }

  changeState(state:string, key:any = null) {
    console.log(`Changing state to ${state}`);
    if (key) {
      console.log(`Changing key to ${key}`);
      this.activeKey = key;
    }
    this.appState = state;
  }

}
