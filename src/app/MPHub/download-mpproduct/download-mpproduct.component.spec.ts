import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadMPProductComponent } from './download-mpproduct.component';

describe('DownloadMPProductComponent', () => {
  let component: DownloadMPProductComponent;
  let fixture: ComponentFixture<DownloadMPProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadMPProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadMPProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
