import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { Heroes } from './heroes/mock-heroes';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  [x: string]: any;
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(Heroes);
  }
  constructor(private messageService: MessageService) { }
}
