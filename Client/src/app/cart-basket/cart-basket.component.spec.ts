import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBasketComponent } from './cart-basket.component';

describe('CartBasketComponent', () => {
  let component: CartBasketComponent;
  let fixture: ComponentFixture<CartBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartBasketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
