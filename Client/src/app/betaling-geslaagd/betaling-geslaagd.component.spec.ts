import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetalingGeslaagdComponent } from './betaling-geslaagd.component';

describe('BetalingGeslaagdComponent', () => {
  let component: BetalingGeslaagdComponent;
  let fixture: ComponentFixture<BetalingGeslaagdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetalingGeslaagdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BetalingGeslaagdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
