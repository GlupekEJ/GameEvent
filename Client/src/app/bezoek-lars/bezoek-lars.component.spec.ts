import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BezoekLarsComponent } from './bezoek-lars.component';

describe('BezoekLarsComponent', () => {
  let component: BezoekLarsComponent;
  let fixture: ComponentFixture<BezoekLarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BezoekLarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BezoekLarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
