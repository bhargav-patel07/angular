import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFunctionsComponent } from './my-functions.component';

describe('MyFunctionsComponent', () => {
  let component: MyFunctionsComponent;
  let fixture: ComponentFixture<MyFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFunctionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
