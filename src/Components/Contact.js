import "../ContactUs.css";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // code to handle form submission
  };

  return (
    <div className="contact-us mt-5">
      <h2>Contact Us</h2>
      <p className="h6">
        Feel free to get in touch with us using the form below:
      </p>
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center flex-column">
          <div>
            <label className="label" htmlFor="name">
              Name:
            </label>
            &nbsp;
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label className="label" htmlFor="email">
              Email:
            </label>
            &nbsp;&nbsp;
            <input type="email" id="email" name="email" required />
          </div>
          <div className="d-flex justify-content-center">
            <label className="label" htmlFor="message">
              Message:
            </label>
            &nbsp;&nbsp;
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder="Type message here"
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
