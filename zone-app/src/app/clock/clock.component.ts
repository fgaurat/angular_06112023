import { ChangeDetectorRef,Component } from '@angular/core';
import {interval,take} from "rxjs"
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent {
  cpt = 0;
  constructor(private ref:ChangeDetectorRef){}
  start1() {
    interval(500).pipe(take(20)).subscribe(v => this.cpt=v)
  }
  start2() {

    this.ref.detach()
    
    interval(500).pipe(take(20)).subscribe(v => {
      this.cpt=v
      if (this.cpt%2===0){
        this.ref.detectChanges()
      }
      console.log(v)
    })

  }
}
