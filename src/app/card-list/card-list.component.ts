import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css', '../../../node_modules/dragula/dist/dragula.min.css']
})
export class CardListComponent implements OnInit {
  @Input() cards: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
