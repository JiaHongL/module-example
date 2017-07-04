import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('name') myName;
  @Input('info') myInfo;
  

  constructor() { 
  }

  ngOnInit() {
  }

}
