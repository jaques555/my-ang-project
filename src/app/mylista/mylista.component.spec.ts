import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MylistaComponent } from './mylista.component';

describe('MylistaComponent', () => {
  let component: MylistaComponent;
  let fixture: ComponentFixture<MylistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MylistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
