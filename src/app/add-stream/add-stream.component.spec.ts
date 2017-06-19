import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStreamComponentComponent } from './add-stream-component.component';

describe('AddStreamComponentComponent', () => {
  let component: AddStreamComponentComponent;
  let fixture: ComponentFixture<AddStreamComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStreamComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStreamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
