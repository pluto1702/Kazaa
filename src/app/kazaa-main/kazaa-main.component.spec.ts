import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KazaaMainComponent } from './kazaa-main.component';

describe('FilePageComponent', () => {
  let component: KazaaMainComponent;
  let fixture: ComponentFixture<KazaaMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KazaaMainComponent],
    });
    fixture = TestBed.createComponent(KazaaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
