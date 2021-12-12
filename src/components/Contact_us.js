import React from "react"

function Contact_us() {
    return (
        <section id="contact-us" className="contact-us">
            <h2>Contact Us</h2>
            <section className="contact">
                <section className="left">
                    <p>
                        If you wish to know more or purchase our products, please leave your details here. Our team
                        will assist you further.
                    </p>
                    <form id="form">
                        <section className="form-identity">
                            <input id="name" type="text" placeholder="Name" required name="name"/>
                            <input id="mail" type="text" placeholder="Email Address" required name="mail"/>
                            <input id="number" type="text" placeholder="Contact Number" required
                                   name="number" maxLength="10"
                            />
                        </section>

                        <textarea name="message" id="message" placeholder="Your Message" required/>
                        <input className="btn" type="submit" value="Submit"/>
                    </form>
                </section>
                <section className="right">
                    <img src="svg/illustrations/5.svg" alt=""/>
                </section>
            </section>
        </section>
    )
}

export default Contact_us;
