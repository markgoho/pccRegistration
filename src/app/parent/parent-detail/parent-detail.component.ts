import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';

import { Parent } from '../../parents/parent';
import {Student} from '../../student/student';


@Component({
  selector: 'app-parent-detail',
  templateUrl: './parent-detail.component.html',
  styleUrls: ['./parent-detail.component.scss']
})
export class ParentDetailComponent implements OnInit {
  key: string;
  parentInfo: FirebaseObjectObservable<Parent>;
  students: any;

  constructor(public af: AngularFire, private route: ActivatedRoute) {
    route.params.subscribe((param: any) => {
      this.key = param['key'];
    });
  }

  ngOnInit() {
    this.parentInfo = this.af.database.object(`/parents/${this.key}`);
    this.students = this.af.database.list(`/parents/${this.key}/children`);
  }

}
