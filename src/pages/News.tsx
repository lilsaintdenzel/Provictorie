import React from 'react';

const News: React.FC = () => {
  return (
    <div>
      <h1>News & Announcements</h1>
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">First Annual Conference Announced</h5>
            <small>3 days ago</small>
          </div>
          <p className="mb-1">Join us in Nairobi for our inaugural conference on brain research in Africa.</p>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">New Data Sharing Protocol Released</h5>
            <small>2 weeks ago</small>
          </div>
          <p className="mb-1">We have released version 1.0 of our data sharing and governance protocol.</p>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Partnership with Major University</h5>
            <small>1 month ago</small>
          </div>
          <p className="mb-1">We are excited to announce a new partnership to expand our research capabilities.</p>
        </a>
      </div>
    </div>
  );
};

export default News;
