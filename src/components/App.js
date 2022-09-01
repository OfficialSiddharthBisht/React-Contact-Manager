import './App.css';
import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = React.useState([
    {
      id : "1",
      name : "Siddharth",
      email : "siddharth@abc.com"
    },
    {
      id : "2",
      name : "Sid",
      email : "sid@abc.com"
    }
  ]);

  return (
    <div className="ui container">
      <Header />    
      <AddContact AddContactHandler />
      <ContactList contacts = {contacts} />
    </div>
  );
}

export default App;
