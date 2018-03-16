import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { LocalStorageService } from '@services/local-storage.service';
 
@Component({selector: 'app-header', template: ''})
class HeaderStubComponent {}

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent { }

let localStorageServiceStub: Partial<LocalStorageService>;
localStorageServiceStub = {
  saveItem: (key, value) => {},
  getItem: (key) => {},
  removeItem: (key) => {}
}

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderStubComponent,
        RouterOutletStubComponent,
        AppComponent
      ],
      providers: [
        {
          provide: LocalStorageService, useValue: localStorageServiceStub
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
