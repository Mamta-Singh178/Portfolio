import { useState } from 'react';
import useNotification from '../hooks/useNotification.jsx';

const apiKey = import.meta.env.VITE_API_KEY;


export default function ContactForm() {
  const [result, setResult] = useState("");
  const [notification, setNotification] = useState(false);


  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", apiKey);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully.");
      triggerNotification({
        type: "success",
        message: "Form Submitted Successfully.",
        duration: 4000,
        animation: "pop",
      });

      
      event.target.reset();


    } else {
      console.log("Error", data);
      setResult(data.message);

      triggerNotification({
        type: "error",
        message: `${data.message}`,
        duration: 94000,
        animation: "pop",
      });
      
    }

    setNotification(true);

  };


  const {NotificationComponent, triggerNotification} = useNotification("top-right")


  return (
    <>
      <div className="section-heading">
        <h1 id="contact">Get in touch</h1>
      </div>
      <div className="contact-container center">
        <form onSubmit={onSubmit} className="contact-form" aria-labelledby="contact">
          <input type="text" name="name" required className="contact-name" placeholder="Your Name" aria-label="Your Name" autoComplete="name"/>
          <input type="email" name="email" required className="contact-email" placeholder="Your Email" aria-label="Your Email" autoComplete="email"/>
          <textarea name="message" required className="contact-message" placeholder="Message" aria-label="Message"></textarea>
          <button aria-label="Submit contact form">Submit Form</button>
          {/*<span>{result}</span>*/}
        </form>

        {NotificationComponent}

        
      <div className="section-splitter" role="separator" aria-hidden="true"></div>

    </div>
    </>
  );
}
