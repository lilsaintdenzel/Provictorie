import React from 'react';
import chinnaOrish from '../assets/chinna-orish.jpg';
import emmanuelEson from '../assets/emmanuel-eson.jpg';

const People: React.FC = () => {
  return (
    <div>
      <h1>Team</h1>
      <p className="lead">
        Our team comprises established experts and emerging researchers committed to excellence in toxicology and neuroscience.
      </p>

      <h2 className="mt-4">Leadership</h2>
      <div className="row mt-3">
        <div className="col-md-4 mb-4 text-center">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2"
            style={{
              width: '150px',
              height: '150px',
              backgroundColor: '#A64D79',
              color: '#fff',
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
          >
            OE
          </div>
          <h6 className="mb-0"><strong>Orish Ebere</strong></h6>
          <small className="text-muted">Executive Director</small>
        </div>
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

      <h2 className="mt-4">Research Team</h2>
      <div className="row mt-3">
        <div className="col-md-4 mb-4 text-center">
          <img
            src={emmanuelEson}
            alt="Emmanuel Eson"
            className="rounded-circle mb-2"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <h6 className="mb-0"><strong>Emmanuel Eson</strong></h6>
          <small className="text-muted">Researcher</small>
        </div>
      </div>

      <h2 className="mt-4">Board of Directors</h2>
      <p className="text-muted">Board member information coming soon.</p>
    </div>
  );
};

export default People;
