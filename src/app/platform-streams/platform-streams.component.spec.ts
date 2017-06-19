import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformStreamsComponent } from './platform-streams.component';

describe('PlatformStreamsComponentComponent', () => {
  let component: PlatformStreamsComponent;
  let fixture: ComponentFixture<PlatformStreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformStreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
