import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class MessionService {
  private missionAnnouncedSource = new Subject<string>();
  private missionConformSource = new Subject<string>();

  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConform$ = this.missionConformSource.asObservable();

  announcedMission(mission: string){
    this.missionAnnouncedSource.next(mission);
  }
  conformMission(astronaut: string){
    this.missionConformSource.next(astronaut);
  }
  constructor() { }
}
