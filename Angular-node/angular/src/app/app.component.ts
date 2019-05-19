import { Component, Input, Output } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 /**
  * 变量初始化
  */
  
  //  title = 'tour of Hero';
  //  myHero = 'WindStorm';

  /**
   * 构造函数初始化
   */
  title: string;
  myHero: string;
  clickMessage: string;
  values: string;
  values1: string;
  values2: string;

  /**
   * 利用*ngFor来显示heroes的每一段
   * 但组件如果用来获取数据会很突兀，应专注于显示数据
   */
  Animals = ['cat', 'dog', 'bird', 'fish'];

  Heroes = ['windstrom', 'airman', 'aotuman', 'greaters'];
  /**
   * 采用外界的hero模板
   * 在内部赋予其相应的值
   */
  heroes = [
    new Hero(1, 'windstorm'),
    new Hero(2, 'javascript'),
    new Hero(3, 'qixiaowei'),
    new Hero(4, 'wdasdnaskjd')
  ];

  /**
   * 表达式上下文中的一个形式
   * 在模板中的使用例如 <img [src]=path />
   * 或者 <img src={{ path }} />
   */
  path = '../favicon.ico';


  getHero(): string {
    alert('java');
    return 'java';
  }
  callPhone(value){
    alert(value);
  }
  onClickMe(){
    console.log('yes, it is me');
    alert(1);
    this.clickMessage = 'you are my hero';
  }
  onKey(event){
    console.log(event);
    console.log(event.target.value);
    if (event.key === 'Backspace') {
      this.values = this.values.slice(0, this.values.length - 1);
    } else {
      this.values += event.key;
    }
  }
  onKey1(value){
    this.values1 += value + ' | ';
  }
  onEnter(value){
    this.values2 = value;
  }
  onEnter1(value){
    if(value){
      this.Heroes.push(value);
    }
  }
  update(value){
    this.values2 = value;
  }
  /**
   * 元素会通过Angular插值使用，插值使用的方法为{{}}
   */



  currentClasses: {};
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      'saveable': this.title,
      'modified': !this.myHero,
  
    };
  }
  
  /**
   * 模板语句用来绑定事件，也就是目标
   * 模板语句不可以引用任何全局变量中的东西
   */
  constructor() {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
    this.clickMessage = '';
    this.values = '';
    this.values = '';
    this.values2 = '';
  }

  

}

