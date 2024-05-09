import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RezeptPanelComponent} from './rezept-panel.component';

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

  it('should set fav', () => {
    spyOn(component.favEvent, 'emit')
    const recipe = {
      id: 1,
      name: 'Test',
      preparation: 'Test',
      image: 'Test',
      rating: 1,
      visibility: true,
      showAuthor: true,
      author: 'Test'
    }
    component.setFav(recipe)
    expect(component.favEvent.emit).toHaveBeenCalledWith(recipe)
  });
});
