import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFindedComponent } from './not-finded.component';

describe('NotFindedComponent', () => {
  let component: NotFindedComponent;
  let fixture: ComponentFixture<NotFindedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFindedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFindedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
