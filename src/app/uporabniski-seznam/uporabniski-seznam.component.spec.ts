import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UporabniskiSeznamComponent } from './uporabniski-seznam.component';

describe('UporabniskiSeznamComponent', () => {
  let component: UporabniskiSeznamComponent;
  let fixture: ComponentFixture<UporabniskiSeznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UporabniskiSeznamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UporabniskiSeznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
