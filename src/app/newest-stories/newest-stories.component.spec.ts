import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestStoriesComponent } from './newest-stories.component';

describe('NewestStoriesComponent', () => {
  let component: NewestStoriesComponent;
  let fixture: ComponentFixture<NewestStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
