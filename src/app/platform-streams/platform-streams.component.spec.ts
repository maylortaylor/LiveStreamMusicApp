import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformStreamsComponentComponent } from './platform-streams-component.component';

describe('PlatformStreamsComponentComponent', () => {
  let component: PlatformStreamsComponentComponent;
  let fixture: ComponentFixture<PlatformStreamsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformStreamsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformStreamsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
