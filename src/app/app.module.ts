import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';

import { CKEditorModule } from 'ng2-ckeditor';
import { DragulaModule } from 'ng2-dragula';
import { RichTextEditorPopupComponent } from './rich-text-editor-popup/rich-text-editor-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    RichTextEditorPopupComponent
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
