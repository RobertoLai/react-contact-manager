import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

export default function ContactCard({ contact, deleteContact }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name="user outline" /> {contact.name.first}
          &nbsp;{contact.name.last}
        </Card.Header>
        <Card.Description>
          <p>
            <Icon name="phone" /> {contact.phone}
          </p>
          <p>
            <Icon name="mail outline" /> {contact.email}
          </p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link
            to={`/contacts/edit/${contact.id}`}
            className="ui basic button green"
          >
            Edit
          </Link>

          <Button
            className="ui basic button red"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired
};
