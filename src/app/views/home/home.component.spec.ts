import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pessoa } from '@models/pessoa.model';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({ selector: 'app-list', template: '' })
class ListStubComponent {
  @Input() items : Pessoa[] = [];
  @Output() onRemoveItem = new EventEmitter<number>();
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListStubComponent,
        HomeComponent,
      ],
      imports: [
        FormsModule,
        NgbModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
