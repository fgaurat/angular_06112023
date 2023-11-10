import { Component, ChangeDetectorRef,Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ChildCompComponent {
  cptChild = 0;

  @Input('cpt')
  cptParent=0

  constructor(private ref: ChangeDetectorRef) {}

  do3s() {
    setInterval(() => {
      this.cptChild++;
      if (this.cptChild % 3 === 0) {
        this.ref.markForCheck()
      }
    }, 1000);
  }
}
