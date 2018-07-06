import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-rich-text-editor-popup',
  templateUrl: './rich-text-editor-popup.component.html',
  styleUrls: ['./rich-text-editor-popup.component.css']
})
export class RichTextEditorPopupComponent implements OnInit {

  public id: number;
  public editorContent = "Placeholder";
  public originalContent = "Placeholder";
  public editorOptions = {/*https://www.froala.com/wysiwyg-editor/docs/options*/};

  constructor(private dialogRef: MatDialogRef<RichTextEditorPopupComponent>,
              @Inject(MAT_DIALOG_DATA) data) {
                console.log("in richtexteditorpopup " + JSON.stringify(data));
                this.originalContent = this.editorContent = data.content;
                this.id = data.id;
  }

  ngOnInit() {}

  onCancel() {
    this.dialogRef.close(this.originalContent);
  }

  onDone() {
    this.dialogRef.close(this.editorContent);
  }
}
