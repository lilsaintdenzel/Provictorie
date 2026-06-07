import React from 'react';
import trendLogo from '../assets/trend-logo.jpg';
import isnLogo from '../assets/isn-logo.jpg';
import cobLogo from '../assets/cob-logo.jpg';

const About: React.FC = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p className="lead">
        Provictoire Research Hub (PRH) is dedicated to advancing neuroscience, toxicology, and molecular biology research in Africa. Using low-cost, accessible models such as <em>Drosophila melanogaster</em>, we equip young scientists with knowledge, skills, and ethical frameworks to address complex health and environmental challenges locally and globally.
      </p>

      {/* Collaborators & Funders */}
      <h2 className="mt-4">Collaborators &amp; Funders</h2>

      <h5 className="mt-4 mb-3 text-muted text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.82rem' }}>Partners</h5>
      <div className="row mb-4">
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card h-100 border text-center p-3 d-flex align-items-center justify-content-center" style={{ minHeight: '120px' }}>
            <img src={trendLogo} alt="TReND in Africa" style={{ maxHeight: '70px', maxWidth: '100%', objectFit: 'contain' }} />
            <p className="mb-0 mt-2 fw-semibold" style={{ fontSize: '0.9rem' }}>TReND in Africa</p>
          </div>
        </div>
      </div>

      <h5 className="mt-3 mb-3 text-muted text-uppercase" style={{ letterSpacing: '1px', fontSize: '0.82rem' }}>Funders</h5>
      <div className="row mb-4">
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card h-100 border text-center p-3 d-flex align-items-center justify-content-center" style={{ minHeight: '120px' }}>
            <img src={isnLogo} alt="International Society for Neurochemistry" style={{ maxHeight: '70px', maxWidth: '100%', objectFit: 'contain' }} />
            <p className="mb-0 mt-2 fw-semibold" style={{ fontSize: '0.9rem' }}>International Society for Neurochemistry</p>
            <small className="text-muted">e.g. Career Development Grants (CDG)</small>
          </div>
        </div>
        <div className="col-sm-6 col-md-4 mb-3">
          <div className="card h-100 border text-center p-3 d-flex align-items-center justify-content-center" style={{ minHeight: '120px' }}>
            <img src={cobLogo} alt="The Company of Biologists" style={{ maxHeight: '70px', maxWidth: '100%', objectFit: 'contain' }} />
            <p className="mb-0 mt-2 fw-semibold" style={{ fontSize: '0.9rem' }}>The Company of Biologists</p>
          </div>
        </div>
      </div>

      <h2 className="mt-4">Our Mission</h2>
      <p>
        To close the research and infrastructure gap between Africa and the global North by providing high-quality education, hands-on training, mentorship, and global collaboration opportunities.
      </p>

      <h2 className="mt-4">Our Story</h2>
      <p>
        Around the world, young scientists gain early exposure to advanced research skills and state-of-the-art equipment. In Africa, this has long been missing. Many bright minds face barriers such as limited laboratory infrastructure, scarce access to modern equipment, and few structured programs for advanced training.
      </p>
      <p>
        At the same time, Africa is disproportionately affected by neurological and environmental health challenges. Many neurological diseases remain poorly understood due to the lack of local research data and limited research facilities.
      </p>
      <p>
        Provictoire Research Hub was founded to change this. We provide a structured ecosystem that empowers young African scientists by:
      </p>
      <ul>
        <li>Delivering high-quality training combining theory and practical experience</li>
        <li>Offering hands-on research using accessible models</li>
        <li>Building a mentorship network connecting early-career researchers with experts</li>
        <li>Ensuring equitable access to research, collaboration, and global opportunities</li>
      </ul>
      <p>
        Through these initiatives, PRH transforms Africa's scientific challenges into opportunities — turning local talent into global leaders and innovators.
      </p>

      <h2 className="mt-4">Our Objectives</h2>
      <div className="row mt-3">
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">1. Educational Modules</h5>
              <p className="card-text">Comprehensive training in toxicology, neuroscience, molecular biology, bioinformatics, and computational biology.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">2. Hands-on Research</h5>
              <p className="card-text">Real-world research projects that equip young African researchers with the skills and experience to contribute at an international level, even within resource-limited settings.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">3. Mentorship Network</h5>
              <p className="card-text">Structured guidance and career support from experienced professionals.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">4. Workshops & Neuro-Schools</h5>
              <p className="card-text">Interactive seminars, workshops, and summer schools that highlight breakthroughs in neuroscience and molecular biology.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">5. Interdisciplinary Collaboration</h5>
              <p className="card-text">Partnerships across neuroscience, toxicology, environmental sciences, and public health to solve real-world challenges.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">6. Grants & Research Support</h5>
              <p className="card-text">Conference and seed research grants to foster innovation and showcase African scientific excellence.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">7. Community Outreach</h5>
              <p className="card-text">Engaging communities to raise awareness of neuroscience and toxicology research for public health and safety.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">8. Scientific Publication Support</h5>
              <p className="card-text">Assistance with manuscript preparation, publication, and global scientific engagement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
