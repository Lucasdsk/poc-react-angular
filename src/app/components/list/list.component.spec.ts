import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListComponent } from "./list.component";

describe("ListComponent", () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ListComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should render message when doesn't have items", () => {
    const listItems = [];
    component.items = listItems;
    const listDebugger = fixture.debugElement;
    const listElement = listDebugger.nativeElement;
    const h3 = listElement.querySelector("h3");

    expect(listElement.querySelector("h3").textContent).toBe(
      "Nenhum item cadastrado..."
    );
  });

  it("Should render items", () => {
    const listItems = [
      { id: 1, name: "Test", age: 20, email: "test@ambev.com.br" },
      { id: 2, name: "Test1", age: 21, email: "test1@ambev.com.br" },
      { id: 3, name: "Test2", age: 22, email: "test2@ambev.com.br" }
    ];
    component.items = listItems;
    fixture.detectChanges();
    const listDebugger = fixture.debugElement;
    const listElement = listDebugger.nativeElement;
    const listUL = listElement.querySelectorAll(".list");
    const listLI = listElement.querySelectorAll(".list__item");

    expect(listUL.length).toBe(1);
    expect(listLI.length).toBe(3);
  });

  it("Should remove item when user clicks on remove's button", () => {
    const listItems = [
      { id: 1, name: "Test", age: 20, email: "test@ambev.com.br" },
      { id: 2, name: "Test1", age: 21, email: "test1@ambev.com.br" },
      { id: 3, name: "Test2", age: 22, email: "test2@ambev.com.br" }
    ];
    component.items = listItems;
    component.handleRemoveItem = jasmine.createSpy("removeItem");
    fixture.detectChanges();

    const listDebugger = fixture.debugElement;
    const listElement = listDebugger.nativeElement;
    const removeButton = listElement.querySelector(".list__item__remove-item");

    removeButton.click()
    expect(component.handleRemoveItem).toHaveBeenCalled();
  });

});
