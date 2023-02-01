import ContactCard from "./ContactCard";
import { contacts } from "../data";
console.log(contacts);
function ContactList() {
  // function renderContact() {
  const contactCards = contacts.map((contact) => (
    <ContactCard key={contact.id} name={contact.name} />
  ));
  // }

  return <ul className="contacts">{contactCards}</ul>;
}

export default ContactList;
