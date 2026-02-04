import React from 'react';
import Hero from '../components/Hero/Hero';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="row">
        <div className="col-md-4">
          <h2>Our Mission</h2>
          <p>To foster a collaborative research environment and build capacity for neuroscience research in Africa.</p>
          <p><a className="btn btn-secondary" href="/about">View details »</a></p>
        </div>
        <div className="col-md-4">
          <h2>Latest News</h2>
          <p>Read about our latest findings, events, and announcements.</p>
          <p><a className="btn btn-secondary" href="/news">View details »</a></p>
        </div>
        <div className="col-md-4">
          <h2>Get Involved</h2>
          <p>Join our network, contribute data, or partner with us to advance brain research.</p>
          <p><a className="btn btn-secondary" href="/contact">View details »</a></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
