import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() content: any;
  @Input() id: number;
  @Output() onEditCard = new EventEmitter<any>();
  
  constructor() {}

  ngOnInit() {}

  sendOpenEditDialogNotification() {
    console.log("edit card " + this.id + " clicked ");
    this.onEditCard.emit(this);
  }
}