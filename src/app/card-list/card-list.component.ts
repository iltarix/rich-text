import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RichTextEditorPopupComponent } from '../rich-text-editor-popup/rich-text-editor-popup.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css', '../../../node_modules/dragula/dist/dragula.min.css']
})
export class CardListComponent implements OnInit {
  @Input() cards: Array<any>;
  @Output() doneEditCard = new EventEmitter<any>();

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  getOpenEditDialogNotification(event) {
    console.log("received notification in card list " + event);

    let dialogRef = this.dialog.open(RichTextEditorPopupComponent, {
      width: "90%",
      height: "90%",
      data: {
        "id": event.id,
        "content": event.content
      }
    });

    dialogRef.afterClosed().subscribe(
      data => event.content = data
      //data => this.doneEditCard.emit(data)
    );
  }
}
