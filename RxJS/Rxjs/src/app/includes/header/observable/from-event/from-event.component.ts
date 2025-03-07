import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../../../appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent implements OnInit, AfterViewInit {
 

 @ViewChild('addBtn') addBtn!:ElementRef;
 
  constructor(private _designUtility: DesignUtilityService){ 
  }
  ngAfterViewInit(): void {
    let count =0;
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res =>{
      let countVal = 'Video'+count++;
      let id = 'elContainer2'
      this._designUtility.print(countVal,id);
      this._designUtility.print(countVal,'elContainer');
    })  
  }

  ngOnInit(): void {
    
  }



}
