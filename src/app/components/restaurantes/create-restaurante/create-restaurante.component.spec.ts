import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRestauranteComponent } from './create-restaurante.component';

describe('CreateRestauranteComponent', () => {
  let component: CreateRestauranteComponent;
  let fixture: ComponentFixture<CreateRestauranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRestauranteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
