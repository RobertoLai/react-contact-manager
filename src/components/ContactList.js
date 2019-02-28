import React from "react";
import ContactCard from "./ContactCard";
import { Card } from "semantic-ui-react";

export default function ContactList({ contacts, deleteContact }) {
  return (
    <Card.Group>
      {contacts &&
        contacts.map(contact => (
          <ContactCard
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
    </Card.Group>
  );
}
