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

  constructor(public af: AngularFire, 
              private config: NgbDatepickerConfig, 
              private fb: FormBuilder) {
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
    const formValues = this.student.value;
    
    // http://stackoverflow.com/questions/40776255/ng-bootstrap-datepicker-format/41443807#41443807
    const ngbDate = this.student.controls['birthDate'].value;
    formValues['born'] = new Date(ngbDate.year, ngbDate.month-1, ngbDate.day).toString();
    formValues['fullName'] = `${this.student.value.firstName} ${this.student.value.lastName}`
    
    // push student to collection of students
    let studentKey = this.students$.push(formValues).key;

    // add student name to parent object
    this.af.database.object(`/parents/${formValues.parent}/children/${studentKey}`)
      .update({ name: formValues.fullName });

    this.student.reset();
  }

  changeState(state:string, key:any = null) {
    if (key) {
      this.activeKey = key;
    }
    this.appState = state;
  }

}
