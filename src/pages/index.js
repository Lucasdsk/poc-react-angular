import React from "react";
import { Route, Switch } from "react-router-dom";
import { StyledPage } from "./Page.styled";
import { Home } from "./Home";
import { Listing } from "./Listing";
import { Header } from "./../components/Header";

const ITENS_MENU = [
  {
    name: "Home",
    path: "/home",
    id: "menu.home"
  },
  {
    name: "Listagem",
    path: "/listing",
    id: "menu.list"
  }
];

const Page = () => (
  <StyledPage>
    <Header itensMenu={ITENS_MENU} />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/listing" component={Listing} />
    </Switch>
  </StyledPage>
);

export { Page };
