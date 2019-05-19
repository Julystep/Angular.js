import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Hero } from '../hero';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  @Input() new: string;
  @Output() li = new EventEmitter();

  title: string;
  constructor() { 
    this.title = 'java';
  }


  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  @Input() hero: Hero;
  @Input() power: string;
  ngOnInit() {
  }


}
