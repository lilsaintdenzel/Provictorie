import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Provictoire Research Hub (PRH)</h5>
            <p>
              Empowering Africa's Next Generation of Scientists through neuroscience, toxicology, and One Health research.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/about" className="text-dark">About</a>
              </li>
              <li>
                <a href="/news" className="text-dark">News & Programs</a>
              </li>
              <li>
                <a href="/resources" className="text-dark">Research</a>
              </li>
              <li>
                <a href="/contact" className="text-dark">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="mailto:provictoireresearch@gmail.com" className="text-dark">provictoireresearch@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Provictoire Research Hub (PRH)
      </div>
    </footer>
  );
};

export default Footer;
