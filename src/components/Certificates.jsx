import React from 'react';

const Certificates = () => {
  return (
    <section className="certificate">
      <h3>
        <i className="bi bi-award"></i> Certificates
      </h3>
      <div className="ceroutter">
        <div className="cbox">
          <p>
            <span
              style={{
                fontWeight: 500,
                fontSize: '1.2em',
                marginRight: '25%',
              }}
            >
              Internship Training Certificate (R&D)
            </span>{' '}
            <span style={{ color: '#AEC8CE' }}>2024</span>
          </p>
          <p style={{ color: '#AEC8CE' }}>Samriddhi Automations Pvt. Ltd.</p>
        </div>

        <div className="cbox">
          <p>
            <span
              style={{
                fontWeight: 500,
                fontSize: '1.2em',
                marginRight: '48%',
              }}
            >
              Java Development Course
            </span>{' '}
            <span style={{ color: '#AEC8CE' }}>2024</span>
          </p>
          <p style={{ color: '#AEC8CE' }}>Hanumant Technology Pvt. Ltd.</p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
