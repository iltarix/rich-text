import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichTextEditorPopupComponent } from './rich-text-editor-popup.component';

describe('RichTextEditorPopupComponent', () => {
  let component: RichTextEditorPopupComponent;
  let fixture: ComponentFixture<RichTextEditorPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichTextEditorPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichTextEditorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
