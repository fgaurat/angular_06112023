import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-test-zone',
  templateUrl: './test-zone.component.html',
  styleUrls: ['./test-zone.component.css']
})
export class TestZoneComponent {
  cpt=0

  constructor(private zone:NgZone){

  }

  do1s(){
    setInterval(()=>this.cpt++,1000)
  }
  do3s(){
    this.zone.runOutsideAngular(()=>{

      setInterval(()=>{
        this.cpt++
        if( this.cpt %3 === 0){
          this.zone.run(()=>{
            this.cpt+=0 
          })
        }
  
      },1000)

    })
  }
}
