import { Component, OnInit } from '@angular/core';
import { Parent } from './parent';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parent: Parent;

  constructor() { }

  ngOnInit() {
  }

  newParent() {
    
  }

}
