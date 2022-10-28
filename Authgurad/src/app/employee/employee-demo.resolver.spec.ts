import { TestBed } from '@angular/core/testing';

import { EmployeeDemoResolver } from './employee-demo.resolver';

describe('EmployeeDemoResolver', () => {
  let resolver: EmployeeDemoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EmployeeDemoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
