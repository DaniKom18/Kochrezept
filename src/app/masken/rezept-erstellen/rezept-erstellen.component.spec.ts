import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezeptErstellenComponent } from './rezept-erstellen.component';

describe('RezeptErstellenComponent', () => {
  let component: RezeptErstellenComponent;
  let fixture: ComponentFixture<RezeptErstellenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezeptErstellenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RezeptErstellenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
