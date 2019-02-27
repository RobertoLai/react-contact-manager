import React, { Component } from "react";
import ContactList from "../components/ContactList";
import { connect } from "react-redux";
import fetchContacts from "../redux/actions";

class ContactListPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div>
        <h1>List of Contacts</h1>
        <ContactList contacts={this.props.contacts} />
      </div>
    );
  }
}

const mapStoreToProps = state => ({
  contacts: state.contactStore.contacts
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts())
});

export default connect(
  mapStoreToProps,
  // { fetchContacts }
  mapDispatchToProps
)(ContactListPage);
