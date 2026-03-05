import React from 'react';
import chinnaOrish from '../assets/chinna-orish.jpg';

const People: React.FC = () => {
  return (
    <div>
      <h1>People</h1>
      <p className="lead">
        Our team comprises established experts and emerging researchers committed to excellence in toxicology, neuroscience, and One Health.
      </p>

      <h2 className="mt-4">Executive Leadership</h2>
      <div className="row mt-3">
        <div className="col-md-4 mb-4 text-center">
          <img
            src={chinnaOrish}
            alt="Chinna Orish"
            className="rounded-circle mb-2"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h6 className="mb-0"><strong>Chinna Orish</strong></h6>
          <small className="text-muted">Co-Director</small>
        </div>
      </div>
    </div>
  );
};

export default People;
