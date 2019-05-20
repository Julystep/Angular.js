import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, OnDestroy } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  title: string;
  intervalid = 0;
  message = '';
  seconds = 10;
  clearTimer(){
    clearInterval(this.intervalid);
  }
  ngOnInit() {
    this.start();
  }
  ngOnDestroy(){
    this.clearTimer();
  }
  start() {
    this.countDown();
  }
  stop() {
    this.clearTimer();
    this.message = `holding at T-${this.seconds} seconds`;
  }
  private countDown() {
    this.clearTimer();
    this.intervalid = window.setInterval( () => {
      this.seconds -= 1;
      if(this.seconds === 0){
        this.message = 'blast off';
      }else{
        if(this.seconds < 0){
          this.seconds = 10;
        }
        this.message = `T-${ this.seconds } secondes and counting`;
      }
    }, 1000);
  }
  constructor() {
    this.title = 'World Wild news';
  }
  changeLog: string[] = [];

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    const log: string[] = [];
    console.log(changes);
    /**
     * 目前遍历的是索引值,propName就是个索引值
     */
    for(let propName in changes){
      console.log(propName);
      let changedProp = changes[propName];

      console.log(changedProp);
      
      let to = JSON.stringify(changedProp.currentValue);
      if(changedProp.isFirstChange()){
        log.push(`Initial value of ${ propName } set to ${ to }`);
      }else{
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${ propName } changed from ${ from } tp ${ to }`);
      }
      this.changeLog.push(log.join(', '));
    }
  }

  private _name = '';

  
  @Input() new: string;
  @Output() li = new EventEmitter();
  @Input() major: number;
  @Input() minor: number;
  @Input() hero: Hero;
  @Input() MyHero: string;
  @Input() News: string;
  @Input() Name: string;
  /**
   * 采用setter 和 getter 组合实现处理在主组件传入副组件的程序
   */
  @Input() set name(name: string){
    this._name = (name && name.trim()) || '<no name set>';
  }
  get name(): string{
    return this._name;
  }

  /**
   * 父组件监听子组件的事件
   */
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;
  vote(agreed: boolean){
    this.voted.emit(agreed);
    this.didVote = true;
  }


}
