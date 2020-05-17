import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameGridSelectComponent } from './name-grid-select.component';

describe('NameGridSelectComponent', () => {
  let component: NameGridSelectComponent;
  let fixture: ComponentFixture<NameGridSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameGridSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameGridSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
