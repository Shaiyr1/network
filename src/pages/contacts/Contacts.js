import React from 'react'
import BigCalendar from '../../components/contacts/bigCalendar/BigCalendar'
import ContactsComponent from '../../components/contacts/contactsComponent/ContactsComponent'
import MyContacts from '../../components/contacts/myContacts/MyContacts'
import Quantity from '../../components/contacts/quantity/Quantity'

function Contacts({ contactsData }) {
  return (
    <section>
      <ContactsComponent contactsData={contactsData}/>
      <BigCalendar/>
      <MyContacts/>
      <Quantity/>
    </section>
  )
}

export default Contacts
