import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerScrollerComponent } from './container-scroller.component';

describe('ContainerScrollerComponent', () => {
  let component: ContainerScrollerComponent;
  let fixture: ComponentFixture<ContainerScrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerScrollerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerScrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
