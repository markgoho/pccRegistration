import { Component, OnInit } from '@angular/core';
import { Parent } from './parent';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
  parents: Parent[];
  activeKey: string;
  appState: string;
  parent = new Parent('', '', '', '');

  constructor (private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getParents()
      .subscribe(parents => this.parents = parents);
  }

  addParent(parent) {
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


}
