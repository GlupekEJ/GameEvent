import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketbetalingokComponent } from './ticketbetalingok.component';

describe('TicketbetalingokComponent', () => {
  let component: TicketbetalingokComponent;
  let fixture: ComponentFixture<TicketbetalingokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketbetalingokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketbetalingokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
