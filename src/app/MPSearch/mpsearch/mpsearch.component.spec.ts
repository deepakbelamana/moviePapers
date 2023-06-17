import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPSearchComponent } from './mpsearch.component';

describe('MPSearchComponent', () => {
  let component: MPSearchComponent;
  let fixture: ComponentFixture<MPSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MPSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
