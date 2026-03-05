import React from 'react';

const Contact: React.FC = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions or would like to get involved, please reach out to us.</p>
      <ul className="list-unstyled mb-4">
        <li><strong>Email:</strong> <a href="mailto:provictoireresearch@gmail.com">provictoireresearch@gmail.com</a></li>
        <li><strong>Phone:</strong> <a href="tel:+2348141765889">+234 814 176 5889</a></li>
        <li><strong>Facebook:</strong> <a href="https://www.facebook.com/people/Provictoire-Research-Organization/61554920686233/" target="_blank" rel="noreferrer">Provictoire Research Organization</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/provictoire-research-organisation/" target="_blank" rel="noreferrer">Provictoire Research Organisation</a></li>
      </ul>
      
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows={3}></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
