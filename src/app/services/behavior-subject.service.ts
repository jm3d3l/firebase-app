import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectService {

  sub = new Subject<number>();
  sub$ = this.sub.asObservable();
  constructor() { }

  getSub(data: number) {
    this.sub.next(data);
  }
}
