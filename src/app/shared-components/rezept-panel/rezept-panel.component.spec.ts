import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptPanelComponent } from './rezept-panel.component';

describe('RezeptPanelComponent', () => {
  let component: RezeptPanelComponent;
  let fixture: ComponentFixture<RezeptPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezeptPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RezeptPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
