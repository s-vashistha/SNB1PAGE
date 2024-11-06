import React from 'react';
import RightArrow from '../../assets/rightArrow.png';
import { contactsData } from '../../data/contactsData';
// Import Bootstrap first // Import Bootstrap first
import './Contacts.css';

const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
        <div className="contacts-header">
            <span className="stroke-text">Contact Us for more</span>
        </div>
        
        <div className="program-categories">
            {contactsData.map((contactsData) => (
                <div className="category">
                    {contactsData.image}
                    <span>{contactsData.heading}</span>
                    <span>{contactsData.details}</span>
                    <div className="join-now"><span>Visit Now</span><img src={RightArrow} alt=""/></div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Contacts;