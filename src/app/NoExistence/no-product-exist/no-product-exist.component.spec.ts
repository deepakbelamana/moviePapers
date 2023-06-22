import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoProductExistComponent } from './no-product-exist.component';

describe('NoProductExistComponent', () => {
  let component: NoProductExistComponent;
  let fixture: ComponentFixture<NoProductExistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoProductExistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoProductExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
