import './Contact.css';

const Contact = () => {

    return(
        <div id="contact" className='contact-container'>
            <h1>Contact Me</h1>
            <div className='contact-icons'>
                <a href='mailto:<ssanjeetkumart67@gmail.com>' target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a>
                <a href="https://www.linkedin.com/in/sanjeet-kumar-sk123/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/sanjeetsk"><i className="fa-brands fa-github"></i></a>
            </div>
        </div>
    )
}

export default Contact;
