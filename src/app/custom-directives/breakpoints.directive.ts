import { Directive, HostListener } from '@angular/core';
import { WindowRef } from '../windowRef/window.provider';
import { BehaviorSubjectService } from '../services/behavior-subject.service';
@Directive({
  selector: '[appBreakpoints]'
})
export class BreakpointsDirective {

  window: WindowRef;
  constructor( private subj: BehaviorSubjectService) {
  }
@HostListener('window:resize') onresize() {
    let b = window.innerWidth;
    this.subj.getSub(b);
}

}
