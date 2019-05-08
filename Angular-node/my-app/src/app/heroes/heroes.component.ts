import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from './mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = Heroes;
  selectedHero: Hero;
  constructor() { }

    /**
     * 会在所有初始化完成后调用
     * 会处理所有的附加的初始化任务
     */
  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    console.log(this);
    this.selectedHero = hero;
  }

}
