import React from 'react';

const Gallery: React.FC = () => {
  return (
    <div>
      <h1>News &amp; Gallery</h1>
      <p className="lead">
        Highlights, announcements, and media from Provictoire Research Hub activities.
      </p>

      <div className="card mt-3 mb-4">
        <div className="card-body">
          <span className="badge mb-2" style={{ backgroundColor: '#A64D79', color: '#fff' }}>Grant Announcement</span>
          <h4 className="card-title">Grant Support from The Company of Biologists</h4>
          <p className="card-text">
            We are pleased to acknowledge grant support from The Company of Biologists in support of our ISN School scheduled for October.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
