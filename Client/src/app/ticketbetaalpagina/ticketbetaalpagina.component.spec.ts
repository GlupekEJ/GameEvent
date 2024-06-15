import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketbetaalpaginaComponent } from './ticketbetaalpagina.component';

describe('TicketbetaalpaginaComponent', () => {
  let component: TicketbetaalpaginaComponent;
  let fixture: ComponentFixture<TicketbetaalpaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketbetaalpaginaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketbetaalpaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
