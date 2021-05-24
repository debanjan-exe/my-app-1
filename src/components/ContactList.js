import React from 'react'
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const renderContacList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact}/>
        )
    })
    return (
        <div className="ui celled list">
            {renderContacList}
        </div>
    )
}

export default ContactList
