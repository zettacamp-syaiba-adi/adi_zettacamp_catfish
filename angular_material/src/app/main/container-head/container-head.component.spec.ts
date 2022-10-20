import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerHeadComponent } from './container-head.component';

describe('ContainerHeadComponent', () => {
  let component: ContainerHeadComponent;
  let fixture: ComponentFixture<ContainerHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
