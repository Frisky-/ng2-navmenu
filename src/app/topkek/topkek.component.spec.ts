import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopkekComponent } from './topkek.component';

describe('TopkekComponent', () => {
  let component: TopkekComponent;
  let fixture: ComponentFixture<TopkekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopkekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopkekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
