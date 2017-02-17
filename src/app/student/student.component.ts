import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';

import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  activeKey: string;
  appState: string;

  student: FormGroup;

  parents$: FirebaseListObservable<any[]>
  students$: FirebaseListObservable<any[]>

  constructor(public af: AngularFire, config: NgbDatepickerConfig, private fb: FormBuilder) {
    this.students$ = af.database.list('/students');
    this.parents$ = af.database.list('/parents');


  }

  ngOnInit() {
    this.student = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      parent: ['', Validators.required],
    });
  }

  onSubmit() {
    this.students$.push(this.student.value);
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
