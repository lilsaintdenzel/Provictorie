import React from 'react';
import Hero from '../components/Hero/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="row">
        <div className="col-md-4">
          <h2>Our Mission</h2>
          <p>To close the research and infrastructure gap between Africa and the global North by providing high-quality education, hands-on training, mentorship, and global collaboration opportunities.</p>
          <p><a className="btn btn-secondary" href="/about">Learn more »</a></p>
        </div>
        <div className="col-md-4">
          <h2>Our Programs</h2>
          <p>From educational modules and hands-on research to workshops, neuro-schools, and community outreach — we equip young African scientists with the tools to succeed.</p>
          <p><a className="btn btn-secondary" href="/news">View programs »</a></p>
        </div>
        <div className="col-md-4">
          <h2>Get Involved</h2>
          <p>Join our network, apply for mentorship, partner with us, or support our mission to advance neuroscience, toxicology, and One Health research in Africa.</p>
          <p><a className="btn btn-secondary" href="/contact">Contact us »</a></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
