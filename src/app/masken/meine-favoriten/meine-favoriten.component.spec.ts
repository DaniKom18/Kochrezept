import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineFavoritenComponent } from './meine-favoriten.component';

describe('MeineFavoritenComponent', () => {
  let component: MeineFavoritenComponent;
  let fixture: ComponentFixture<MeineFavoritenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeineFavoritenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeineFavoritenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
