function ContactCard(props) {
  console.log("ContactCard:", props);
  return (
    <li className="contact">
      <div className="icon">A</div>
      {props.name}
    </li>
  );
}

export default ContactCard;
