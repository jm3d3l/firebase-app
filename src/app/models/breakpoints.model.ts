import { BehaviorSubjectService } from '../services/behavior-subject.service';


export class BreakPoints {
    breakpoints: any = {
     small: 576,
     medium: 786,
     large: 992
    };
 constructor(private subj: BehaviorSubjectService) {
 }
get large() {
    let screenSize = this.subj.sub$;
    console.log(screenSize);
    return screenSize;
    // if (  > this.breakpoints.) return true;
}

}
