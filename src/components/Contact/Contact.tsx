import React from 'react'
import './styles/Contact.scss'

type ContactProps = {
  id?: string;
}

function Contact (props: ContactProps) {
  function handleSubmit (e:React.FormEvent) {
    e.preventDefault()
  }

  return (
        <section className="contact" id={props.id}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-mg-6 col-sm-12 col-12">
                        <h2>Contact Us</h2>
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Your name" name="from_name" required={true} minLength={3} maxLength={32}/>
                            <input type="email" placeholder="Your email" name="from_email" required={true} minLength={5} maxLength={64}/>
                            <textarea name="message" rows={5} cols={33} minLength={16} maxLength={256}></textarea>
                            <input type="submit" id="submit_btn" value="Send"/>
                        </form>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-mg-6 col-sm-12 col-12">
                        <div className="extraInfo">
                            <ul>
                                <li>###-###-####</li>
                                <li>Address</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Contact
