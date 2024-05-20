import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptBearbeitenComponent } from './rezept-bearbeiten.component';

describe('RezeptBearbeitenComponent', () => {
  let component: RezeptBearbeitenComponent;
  let fixture: ComponentFixture<RezeptBearbeitenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezeptBearbeitenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RezeptBearbeitenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
