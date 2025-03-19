import React from 'react'
import ContactForm from '../Components/Contact/ContactForm';
import ContactHero from '../Components/Contact/ContactHero';
import ContactMap from '../Components/Contact/ContactMap';

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactMap />
      <ContactForm />
    </div>
  )
}

export default Contact;