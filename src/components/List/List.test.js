import React from "react";
import { List } from "./index";

describe("<List />", () => {
  it("Render Component", () => {
    const listItems = [
      { id: 1, name: "Test", age: 20, email: "test@ambev.com.br" },
      { id: 2, name: "Test1", age: 21, email: "test1@ambev.com.br" }
    ];
    const ListComponent = shallow(<List items={listItems} />);

    expect(ListComponent).toMatchSnapshot();
  });

  it("Should have the corrects props", () => {
    const listItems = [
      { id: 1, name: "Test", age: 20, email: "test@ambev.com.br" },
      { id: 2, name: "Test1", age: 21, email: "test1@ambev.com.br" }
    ];
    const handleRemoveItem = jest.fn();
    const props = {
      items: listItems,
      onRemoveItem: handleRemoveItem
    };
    const ListComponent = mount(
      <List items={listItems} onRemoveItem={handleRemoveItem} />
    );

    expect(ListComponent.props()).toEqual(props);
  });

  it("Should render message when doesn't have items", () => {
    const listItems = [];
    const ListComponent = shallow(<List items={listItems} />);

    expect(ListComponent.find("h3")).toHaveLength(1);
  });

  it("Should render items", () => {
    const listItems = [
      { id: 1, name: "Test", age: 20, email: "test@ambev.com.br" },
      { id: 2, name: "Test1", age: 21, email: "test1@ambev.com.br" },
      { id: 3, name: "Test2", age: 22, email: "test2@ambev.com.br" }
    ];
    const ListComponent = shallow(<List items={listItems} />);

    expect(ListComponent.find(".list")).toHaveLength(1);
    expect(ListComponent.find(".list__item")).toHaveLength(3);
  });

  it("Should remove item when user clicks on remove's button", () => {
    const listItems = [
      { id: 1, name: "Test", age: 20, email: "test@ambev.com.br" },
      { id: 2, name: "Test1", age: 21, email: "test1@ambev.com.br" }
    ];
    const handleRemoveItem = jest.fn();
    const ListComponent = shallow(
      <List items={listItems} onRemoveItem={handleRemoveItem} />
    );
    const listItem = ListComponent.find(".list__item")
      .first()
      .find(".list__item__remove-item");
      
    listItem.simulate("click");
    expect(handleRemoveItem).toHaveBeenCalled();
  });
});
