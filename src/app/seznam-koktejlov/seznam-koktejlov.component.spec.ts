import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeznamKoktejlovComponent } from './seznam-koktejlov.component';

describe('SeznamKoktejlovComponent', () => {
  let component: SeznamKoktejlovComponent;
  let fixture: ComponentFixture<SeznamKoktejlovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeznamKoktejlovComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeznamKoktejlovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
