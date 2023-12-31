import React from "react";
import styles from './Contact.module.css';
import { BriefcaseIcon } from "@heroicons/react/solid";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className={styles.contact_section}>
      <div className={styles.contact_container}>
      <BriefcaseIcon className={styles.contact_icon} />
        <h2>Hire Me</h2>
        <div className={styles.flexContainer}>
          <div className={styles.contact_map}>
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed/v1/place?q=514+South+2nd+Street,+Alvin,+TX,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
            <div className={styles.contact_contactInfo}>
              <div className={styles.contact_address}>
                <h2>ADDRESS</h2>
                <p style={{marginTop: '0.25rem'}}>
                  514 South 2nd St. <br />
                  Alvin, TX 77511
                </p>
              </div>

              <div className={styles.contact_emailPhone} >
                <h2>EMAIL</h2>
                <a className={styles.contact_email} >
                  mitsananikone@gmail.com
                </a>
                <h2 className={styles.contact_phone}>
                  PHONE
                </h2>
                <p style={{lineHeight: '1.625' }}>(832) 620-3026</p>
              </div>
            </div>
          </div>
          <form
            netlify
            name="contact"
            onSubmit={handleSubmit}
            className={styles.contact_form}>
            <p style={{lineHeight: '1.625', paddingTop: '32px', textAlign: 'left' }}>
            I'm always interested in hearing from potential collaborators, clients, and fellow developers. Whether you have a project in mind or just want to connect, feel free to reach out to me using the contact form below or via email at mitsananikone@gmail.com. I'll do my best to respond to your message as soon as possible.

            I'm looking forward to hearing from you! <br/>
            </p>
            <div className={styles.contact_signature}><h5>Mit</h5></div>
            
            
            <div>
              <label htmlFor="name" className={styles.contact_nameLabel}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.contact_inputName}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className={styles.contact_emailLabel}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.contact_inputEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className={styles.contact_msgLabel}>
                Message 
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.contact_inputMsg}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className={styles.contact_submit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
