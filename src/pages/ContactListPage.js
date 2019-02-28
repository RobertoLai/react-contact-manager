import React, { Component } from "react";
import ContactList from "../components/ContactList";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { fetchContacts, deleteContact } from "../redux/actions";

class ContactListPage extends Component {
  state = { redirect: false };

  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div>
        {this.state.redirect ? (
          <Redirect to="/" />
        ) : (
          <ContactList
            contacts={this.props.contacts}
            deleteContact={this.props.deleteContact}
          />
        )}
      </div>
    );
  }
}

const mapStoreToProps = state => ({
  contacts: state.contactStore.contacts,
  loading: state.contactStore.loading,
  errors: state.contactStore.errors
});

/* 
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
  deleteContact
});

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(ContactListPage); */
export default connect(
  mapStoreToProps,
  { fetchContacts, deleteContact }
)(ContactListPage);
