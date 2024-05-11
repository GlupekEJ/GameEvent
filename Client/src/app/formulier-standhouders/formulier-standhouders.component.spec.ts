import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulierStandhoudersComponent } from './formulier-standhouders.component';

describe('FormulierStandhoudersComponent', () => {
  let component: FormulierStandhoudersComponent;
  let fixture: ComponentFixture<FormulierStandhoudersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulierStandhoudersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulierStandhoudersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
