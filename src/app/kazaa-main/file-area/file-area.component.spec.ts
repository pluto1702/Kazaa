import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAreaComponent } from './file-area.component';

describe('FileAreaComponent', () => {
  let component: FileAreaComponent;
  let fixture: ComponentFixture<FileAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileAreaComponent]
    });
    fixture = TestBed.createComponent(FileAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
