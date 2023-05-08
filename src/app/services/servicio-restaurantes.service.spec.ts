import { TestBed } from '@angular/core/testing';

import { ServicioRestaurantesService } from './servicio-restaurantes.service';

describe('ServicioRestaurantesService', () => {
  let service: ServicioRestaurantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioRestaurantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
