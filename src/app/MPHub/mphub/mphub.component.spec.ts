import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPHubComponent } from './mphub.component';

describe('MPHubComponent', () => {
  let component: MPHubComponent;
  let fixture: ComponentFixture<MPHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPHubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MPHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
