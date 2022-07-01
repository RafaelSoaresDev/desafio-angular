import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcutItemComponent } from './product-item.component';

describe('ProcutItemComponent', () => {
  let component: ProcutItemComponent;
  let fixture: ComponentFixture<ProcutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcutItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
