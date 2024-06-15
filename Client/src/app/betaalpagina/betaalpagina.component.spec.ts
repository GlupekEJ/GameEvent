import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaalpaginaComponent } from './betaalpagina.component';

describe('BetaalpaginaComponent', () => {
  let component: BetaalpaginaComponent;
  let fixture: ComponentFixture<BetaalpaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetaalpaginaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BetaalpaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
