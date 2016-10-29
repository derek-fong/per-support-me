/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NavbarComponent } from './navbar.component';
import { AuthService } from '../../auth/shared/auth.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {

    class MockAuthService {
      login(): void { }
      logout(): void { }
    }

    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers: [{ provide: AuthService, useClass: MockAuthService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', inject([AuthService], (authService: AuthService) => {

    const loginSpy = spyOn(authService, 'login');
    const logoutSpy = spyOn(authService, 'logout');

    expect(component).toBeTruthy();
  }));
});
