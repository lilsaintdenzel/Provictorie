import React, { useState, useEffect } from 'react';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';
import gallery4 from '../assets/gallery-4.jpg';
import gallery5 from '../assets/gallery-5.jpg';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

const Gallery: React.FC = () => {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, []);

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
      <div id="galleryCarousel" className="carousel slide" data-bs-ride="false">
        <div className="carousel-inner rounded" style={{ maxHeight: '480px', backgroundColor: '#000' }}>
          {images.map((src, i) => (
            <div key={i} className={`carousel-item${i === active ? ' active' : ''}`}>
              <img
                src={src}
                className="d-block mx-auto"
                alt={`Gallery photo ${i + 1}`}
                style={{ maxHeight: '480px', width: '100%', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          onClick={prev}
          style={{ width: '8%' }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={next}
          style={{ width: '8%' }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>

        <div className="carousel-indicators" style={{ position: 'static', marginTop: '10px' }}>
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: i === active ? '#A64D79' : '#ccc',
                border: 'none',
                margin: '0 4px',
                padding: 0,
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
