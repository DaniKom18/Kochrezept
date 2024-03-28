import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptDetailViewComponent } from './rezept-detail-view.component';

describe('RezeptDetailViewComponent', () => {
  let component: RezeptDetailViewComponent;
  let fixture: ComponentFixture<RezeptDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezeptDetailViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RezeptDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
