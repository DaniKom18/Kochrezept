import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptVerwaltungComponent } from './rezept-verwaltung.component';

describe('RezeptVerwaltungComponent', () => {
  let component: RezeptVerwaltungComponent;
  let fixture: ComponentFixture<RezeptVerwaltungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezeptVerwaltungComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RezeptVerwaltungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
