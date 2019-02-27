import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import ContactListPage from "./pages/ContactListPage";
import ContactFormPage from "./pages/ContactFormPage";
class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" to="/">
            Contacts List
          </NavLink>
          <NavLink className="item" activeClassName="active" to="/contacts/new">
            Add Contact
          </NavLink>
        </div>
        <Route exact path="/" component={ContactListPage} />
        <Route path="/contacts/new" component={ContactFormPage} />
        <Route path="/contacts/edit/:_id" component={ContactFormPage} />
      </Container>
    );
  }
}

export default App;
