import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSelectorComponent } from './language-selector.component';
import { LocalStorageService } from '@services/local-storage.service';

let localStorageServiceStub: Partial<LocalStorageService>;
localStorageServiceStub = {
  saveItem: (key, value) => {},
  getItem: (key) => {},
  removeItem: (key) => {}
}


describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LanguageSelectorComponent
      ],
      providers: [
        {
          provide: LocalStorageService, useValue: localStorageServiceStub
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
