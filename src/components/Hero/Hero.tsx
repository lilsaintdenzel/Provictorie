import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="p-5 mb-4 bg-primary-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Provictoire Research Hub (PRH)</h1>
        <p className="col-md-8 fs-4">
          Empowering Africa's Next Generation of Scientists
        </p>
        <a className="btn btn-primary btn-lg" href="/about">Learn More</a>
      </div>
    </div>
  );
};

export default Hero;
