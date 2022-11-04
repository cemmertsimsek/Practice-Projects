import React from "react";
import Card from "./Card";
import contacts from "../contact";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media-exp1.licdn.com/dms/image/C4D03AQF7btwal_PLpg/profile-displayphoto-shrink_400_400/0/1645706165473?e=1671062400&v=beta&t=ifmhlY5WmyOTJdCEDWRlxo8f2geyg1aofGT91XF3iM4" />

      {contacts.map(createCard)}

      {/* <Card
        name={contacts[0].name}
        tel={contacts[0].phone}
        email={contacts[0].email}
        img={contacts[0].imgURL}
      />
      <Card
        name={contacts[1].name}
        tel={contacts[1].phone}
        email={contacts[1].email}
        img={contacts[1].imgURL}
      />
      <Card
        name={contacts[2].name}
        tel={contacts[2].phone}
        email={contacts[2].email}
        img={contacts[2].imgURL}
      /> */}
    </div>
  );
}

export default App;
