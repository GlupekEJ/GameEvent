import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandhoudersComponent } from './standhouders.component';

describe('StandhoudersComponent', () => {
  let component: StandhoudersComponent;
  let fixture: ComponentFixture<StandhoudersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandhoudersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandhoudersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
