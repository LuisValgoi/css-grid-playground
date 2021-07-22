import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import First from "./pages/first";
import Second from "./pages/second";

export default function App() {
  return (
    <BrowserRouter>
      <Nav>
        <UnorderedList>
          <ListItem>
            <Link style={{ color: "white" }} to="/first">
              First Example
            </Link>
          </ListItem>
          <ListItem>
            <Link style={{ color: "white" }} to="/second">
              Second Example
            </Link>
          </ListItem>
        </UnorderedList>
      </Nav>
      <>
        <Switch>
          <Route path="/first" exact>
            <First />
          </Route>
          <Route path="/second" exact>
            <Second />
          </Route>
        </Switch>
      </>
    </BrowserRouter>
  );
}

const Nav = ({ children }) => <nav>{children}</nav>;

const ListItem = ({ children }) => (
  <li
    style={{
      display: "inline",
      color: "white",
      textDecoration: "none",
      margin: "5px 10px",
    }}
  >
    {children}
  </li>
);

const UnorderedList = ({ children }) => (
  <ul
    style={{
      textAlign: "center",
    }}
  >
    {children}
  </ul>
);
