import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploadMongoComponent } from './bulk-upload-mongo.component';

describe('BulkUploadMongoComponent', () => {
  let component: BulkUploadMongoComponent;
  let fixture: ComponentFixture<BulkUploadMongoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkUploadMongoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkUploadMongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
