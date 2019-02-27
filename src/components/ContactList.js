import React from "react";
import ContactCard from "./ContactCard";
import { Card } from "semantic-ui-react";

export default function ContactList({ contacts }) {
  console.log('CONTACTS', contacts);
  
  return (
    <Card.Group>
      {contacts && contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </Card.Group>
  );
}
