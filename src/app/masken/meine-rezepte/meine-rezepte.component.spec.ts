import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineRezepteComponent } from './meine-rezepte.component';

describe('MeineRezepteComponent', () => {
  let component: MeineRezepteComponent;
  let fixture: ComponentFixture<MeineRezepteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeineRezepteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeineRezepteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
