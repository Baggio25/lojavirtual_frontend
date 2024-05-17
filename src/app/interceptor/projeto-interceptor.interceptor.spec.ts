import { TestBed } from '@angular/core/testing';

import { ProjetoInterceptorInterceptor } from './projeto-interceptor.interceptor';

describe('ProjetoInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ProjetoInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ProjetoInterceptorInterceptor = TestBed.inject(ProjetoInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
