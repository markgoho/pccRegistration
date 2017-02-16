import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

const names = ['Mark', 'Nella', 'Debra', 'Elaine'];

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.css']
})
export class TypeaheadComponent implements OnInit {
  model: any;
  searching = false;
  searchFailed = false;

  constructor(private af: AngularFire) { }

  ngOnInit() {
  }

  _searchDb(term: string) {
    return this.af.database.list('/parents', 
      { query: 
        { orderByChild: 'firstName', equalTo: term  }
      });
  }

  search = (text$: Observable<string>) => 
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => {
        this.searching = true;
      })
      .switchMap(term => this._searchDb(term))
      .do(() => this.searching = false);

}
