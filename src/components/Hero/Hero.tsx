import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="p-5 mb-4 bg-primary-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Provictoire Research Organisation</h1>
        <p className="col-md-8 fs-4">
          A collaborative platform for sharing data, resources, and expertise to accelerate our understanding of the human brain.
        </p>
        <button className="btn btn-primary btn-lg" type="button">Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
