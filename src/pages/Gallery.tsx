import React from 'react';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import gallery5 from '../assets/gallery-5.jpg';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

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

      <h2 className="mt-4 mb-3">Photo Gallery</h2>
      <div className="row g-3">
        {images.map((src, i) => (
          <div key={i} className="col-sm-6 col-md-4">
            <img
              src={src}
              alt={`Gallery photo ${i + 1}`}
              className="img-fluid rounded w-100"
              style={{ height: '220px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
