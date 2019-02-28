import React, { Component } from "react";
import ContactForm from "../components/ContactForm";

import { Redirect } from "react-router";
import { SubmissionError } from "redux-form";
import { connect } from "react-redux";
import {
  newContact,
  saveContact,
  fetchContact,
  updateContact,
  deleteContact
} from "../redux/actions";

class ContactFormPage extends Component {
  state = { redirect: false };

  componentDidMount() {
    const { id } = this.props.match.params;


    if (id) {
      this.props.fetchContact(id);
    } else {
      this.props.newContact();
    }
  }

  _submit = contact => {
    if (!contact.id) {
      return this.props
        .saveContact(contact)
        .then(response => this.setState({ redirect: true }))
        .catch(err => {
          throw new SubmissionError(this.props.errors);
        });
    } else {
      return this.props
        .updateContact(contact)
        .then(response => this.setState({ redirect: true }))
        .catch(err => {
          throw new SubmissionError(this.props.errors);
        });
    }
  };

  render() {
    return (
      <div>
        {this.state.redirect ? (
          <Redirect to="/" />
        ) : (
          <ContactForm
            contact={this.props.contact}
            loading={this.props.loading}
            onSubmit={this._submit}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contact: state.contactStore.contact,
    errors: state.contactStore.errors
  };
}

export default connect(
  mapStateToProps,
  { newContact, saveContact, fetchContact, updateContact, deleteContact }
)(ContactFormPage);
