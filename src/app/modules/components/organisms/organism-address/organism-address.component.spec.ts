import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismAddressComponent } from './organism-address.component';

describe('OrganismAddressComponent', () => {
  let component: OrganismAddressComponent;
  let fixture: ComponentFixture<OrganismAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
