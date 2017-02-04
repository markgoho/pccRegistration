import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Parent } from '../../parents/parent';

@Component({
  selector: 'app-parent-detail',
  templateUrl: './parent-detail.component.html',
  styleUrls: ['./parent-detail.component.scss']
})
export class ParentDetailComponent implements OnInit {
  key: string;
  parentInfo: FirebaseObjectObservable<Parent>;

  constructor(public af: AngularFire, private route: ActivatedRoute) {
    route.params.subscribe((param: any) => {
      this.key = param['key'];
      console.log(this.key);
    });
  }

  ngOnInit() {
    this.parentInfo = this.af.database.object(`/parents/${this.key}`);
  }

}
