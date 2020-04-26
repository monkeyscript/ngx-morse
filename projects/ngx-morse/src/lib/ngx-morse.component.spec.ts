import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMorseComponent } from './ngx-morse.component';

describe('NgxMorseComponent', () => {
  let component: NgxMorseComponent;
  let fixture: ComponentFixture<NgxMorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
