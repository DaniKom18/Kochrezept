import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeinProfilComponent } from './mein-profil.component';

describe('MeinProfilComponent', () => {
  let component: MeinProfilComponent;
  let fixture: ComponentFixture<MeinProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeinProfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeinProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
