import React from "react";
import "../styles/styles.css";
import "../styles/Contact.css";

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="line"></div>
            <h1>Contact</h1>
            <div className="contact-container">
                <div className="socials">
                    <p>Email: xyz@xyz.com</p>
                    <p>Phone: +91 9876543210</p>
                    <p>
                        <a href="">LinkedIn</a>
                    </p>
                    <p>
                        <a href="">Github</a>
                    </p>
                    <p>
                        <a href="">Twitter</a>
                    </p>
                    <p>
                        <a href="">Instagram</a>
                    </p>
                </div>
                <div className="send-message">
                    <form action="">
                        <div className="form-content">
                            <label for="firstname">First Name</label>
                            <input name="firstname" type="text" />

                            <label for="lastname">Last Name</label>
                            <input name="lastname" type="text" />

                            <label for="email">Email</label>
                            <input name="email" type="email" />

                            <label for="message">Message</label>
                            <textarea name="message">
                            </textarea>

                            <button className="send-btn">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
