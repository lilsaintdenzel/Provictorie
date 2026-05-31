import React from 'react';
import isnFlyer from '../assets/isn-school-flyer.jpg';

const News: React.FC = () => {
  return (
    <div>
      {/* ── News & Announcements ── */}
      <h1>News & Announcements</h1>
      <p className="lead">Stay up to date with the latest opportunities, events, and updates from Provictoire Research Hub.</p>

      {/* ISN School Featured Announcement */}
      <div
        className="rounded-3 overflow-hidden mb-5 mt-4"
        style={{
          background: 'linear-gradient(135deg, #6b1a3a 0%, #A64D79 50%, #8B3F66 100%)',
          boxShadow: '0 8px 32px rgba(166,77,121,0.35)',
        }}
      >
        {/* Top badge bar */}
        <div
          className="d-flex align-items-center px-4 py-2"
          style={{ backgroundColor: 'rgba(0,0,0,0.25)', gap: '10px' }}
        >
          <span
            className="badge text-uppercase fw-bold px-3 py-2"
            style={{ backgroundColor: '#00B4D8', letterSpacing: '1px', fontSize: '0.7rem' }}
          >
            Now Open
          </span>
          <span className="text-white" style={{ opacity: 0.85, fontSize: '0.85rem' }}>
            Application Deadline: <strong>20th March, 2026</strong>
          </span>
        </div>

        <div className="row g-0">
          {/* Left panel */}
          <div className="col-lg-6 p-4 p-lg-5">
            <p
              className="fw-bold text-uppercase mb-1"
              style={{ color: '#f0b8d4', letterSpacing: '2px', fontSize: '0.78rem' }}
            >
              Call for Application
            </p>
            <h2 className="fw-bold mb-1" style={{ color: '#ffffff', fontSize: '1.7rem', lineHeight: 1.2 }}>
              International Society for<br />Neurochemistry (ISN) School
            </h2>
            <p className="mb-3" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
              University of Port Harcourt, Rivers State, Nigeria
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4">
              <div
                className="rounded-2 px-3 py-2"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff' }}
              >
                <div style={{ fontSize: '0.7rem', opacity: 0.75, textTransform: 'uppercase', letterSpacing: '1px' }}>Date</div>
                <div className="fw-bold" style={{ fontSize: '0.95rem' }}>25 – 30 October 2026</div>
              </div>
              <div
                className="rounded-2 px-3 py-2"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff' }}
              >
                <div style={{ fontSize: '0.7rem', opacity: 0.75, textTransform: 'uppercase', letterSpacing: '1px' }}>Organizer</div>
                <div className="fw-bold" style={{ fontSize: '0.95rem' }}>Chinna Orish, MBBS, PhD</div>
              </div>
            </div>

            <div className="mb-4 p-3 rounded-2" style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderLeft: '3px solid #00B4D8' }}>
              <p className="mb-0" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                <strong style={{ color: '#fff' }}>Theme:</strong> Neurogenetics for Brain Health: Capacity Building in{' '}
                <em>Drosophila melanogaster</em> Models of Neurodevelopmental and Neurodegenerative Disorders in Africa
              </p>
            </div>

            <div className="d-flex flex-wrap gap-2">
              <a
                href="https://forms.gle/cuS72DcHUUNx8Qw89"
                target="_blank"
                rel="noopener noreferrer"
                className="btn fw-bold px-4 py-2"
                style={{
                  backgroundColor: '#00B4D8',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '0.95rem',
                }}
              >
                Apply Now →
              </a>
              <a
                href="mailto:isnschool2026@gmail.com"
                className="btn px-4 py-2"
                style={{
                  backgroundColor: 'transparent',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.45)',
                  borderRadius: '6px',
                  fontSize: '0.95rem',
                }}
              >
                Contact Organizers
              </a>
            </div>
          </div>

          {/* Right panel */}
          <div
            className="col-lg-6 p-4 p-lg-5 d-flex flex-column justify-content-between"
            style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
          >
            <div>
              <h5 className="fw-bold mb-3" style={{ color: '#f0b8d4' }}>About the School</h5>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                The School aims to train young African scientists in cutting-edge neuroscience using{' '}
                <em>Drosophila melanogaster</em> as a powerful, low-cost experimental model. Expert-led lectures will
                cover Drosophila models of neurodegenerative diseases, molecular approaches, genomics, bioinformatics,
                functional genetics, behavioral phenotyping, and machine learning for genomic biomarker discovery.
              </p>

              <h5 className="fw-bold mb-2 mt-3" style={{ color: '#f0b8d4' }}>Who Should Apply?</h5>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                Postgraduate students (MSc &amp; PhD), Postdoctoral fellows and early-career researchers across Africa
                pursuing careers in biomedical sciences with an interest in Neuroscience and Neurochemistry.
              </p>

              <h5 className="fw-bold mb-2 mt-3" style={{ color: '#f0b8d4' }}>Costs Covered</h5>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                Meals, accommodation, and transportation will be provided for successful applicants.
              </p>
            </div>

            <div
              className="mt-3 p-3 rounded-2 d-flex align-items-center justify-content-between"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)', flexWrap: 'wrap', gap: '8px' }}
            >
              <div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Sponsored by
                </div>
                <div className="fw-bold" style={{ color: '#fff', fontSize: '0.9rem' }}>
                  International Society for Neurochemistry (ISN)
                </div>
              </div>
              <span
                className="badge"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  color: '#f0b8d4',
                  fontSize: '0.75rem',
                  padding: '6px 12px',
                }}
              >
                isnschool2026@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Flyer image strip */}
      <a
        href="https://forms.gle/cuS72DcHUUNx8Qw89"
        target="_blank"
        rel="noopener noreferrer"
        className="d-block mt-4"
        style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 6px 24px rgba(0,0,0,0.18)' }}
      >
        <img
          src={isnFlyer}
          alt="ISN School 2026 — Call for Applications Flyer"
          style={{ width: '100%', display: 'block' }}
        />
      </a>
      <p className="text-center text-muted mt-2" style={{ fontSize: '0.9rem' }}>
        You can also scan the QR code on the flyer to access the application form.
      </p>

      {/* ── Our Programs ── */}
      <hr className="my-5" />
      <h2>Our Programs</h2>
      <p className="lead">
        PRH integrates laboratory and computational training to build future-ready African scientists. Our programs span education, research, mentorship, and community engagement.
      </p>

      <div className="row mt-4">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Educational Modules</h4>
              <p className="card-text">Comprehensive training in toxicology, neuroscience, molecular biology, bioinformatics, and computational biology — combining theory with practical application.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Hands-on Research Access</h4>
              <p className="card-text">Laboratory and computational internships for undergraduate students. Hands-on workshops in both wet-lab and computational techniques using accessible research models.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Mentorship Network</h4>
              <p className="card-text">Structured guidance and career support connecting early-career researchers with experienced professionals. Curriculum development, structured mentorship, and peer learning.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Workshops & Neuro-Schools</h4>
              <p className="card-text">Interactive seminars, workshops, and summer schools highlighting breakthroughs in neuroscience and molecular biology for emerging researchers.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Internship & Research Training</h4>
              <p className="card-text">Capacity-building programs for emerging researchers. Despite Africa's historical lack of laboratory infrastructure, PRH proves that passion and structured training can bridge the gap.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Community Engagement</h4>
              <p className="card-text">Engaging communities to raise awareness of neuroscience and toxicology research for public health and safety — connecting science to society.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-light rounded">
        <h4>Education & Innovation</h4>
        <p>
          PRH integrates laboratory and computational training to build future-ready African scientists. Despite Africa's historical lack of laboratory infrastructure, PRH proves that passion, structured training, and early exposure to modern research techniques can bridge the gap — turning Africa's young minds into global scientific leaders.
        </p>
      </div>
    </div>
  );
};

export default News;
