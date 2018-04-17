import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeButtonComponentComponent } from './like-button-component.component';

describe('LikeButtonComponentComponent', () => {
  let component: LikeButtonComponentComponent;
  let fixture: ComponentFixture<LikeButtonComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeButtonComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
