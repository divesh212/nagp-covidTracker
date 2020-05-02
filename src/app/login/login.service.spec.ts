import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
