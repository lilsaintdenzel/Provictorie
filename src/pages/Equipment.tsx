import React from 'react';

const Equipment: React.FC = () => {
  return (
    <div>
      <h1>Resources &amp; Equipment</h1>
      <p className="lead">Our laboratory is equipped with a wide range of tools to support cutting-edge research.</p>

      <div className="row mt-4">
        <div className="col-md-6">
          <ul className="list-group mb-3">
            <li className="list-group-item">Microcentrifuges</li>
            <li className="list-group-item">Refrigerated centrifuges</li>
            <li className="list-group-item">-20°C Freezers</li>
            <li className="list-group-item">Refrigerators (4°C)</li>
            <li className="list-group-item">Pressure cooker</li>
            <li className="list-group-item">PCR Thermal Cycler</li>
            <li className="list-group-item">Microplate Reader</li>
            <li className="list-group-item">Micropipettes</li>
            <li className="list-group-item">Multi-channel pipettes</li>
            <li className="list-group-item">Vortex mixer</li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="list-group mb-3">
            <li className="list-group-item">Touch screen constant temperature Incubators</li>
            <li className="list-group-item">Automatic Electronic Analytic balances</li>
            <li className="list-group-item">Thermostatic Water bath</li>
            <li className="list-group-item">Laboratory glassware</li>
            <li className="list-group-item">Measuring cylinders</li>
            <li className="list-group-item">3D Printer</li>
            <li className="list-group-item">Stereo zoom microscopes</li>
            <li className="list-group-item">Compound light microscope</li>
            <li className="list-group-item">Microwave</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-5">Animal Behavioural Apparatus</h2>

      <div className="row mt-3">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Learning &amp; Memory</h5>
              <ul className="mb-0">
                <li>Y-Maze</li>
                <li>Barnes Maze</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Anxiety &amp; Emotional Behaviour</h5>
              <ul className="mb-0">
                <li>Elevated Plus Maze</li>
                <li>Open Field Arena</li>
                <li>Hole Board Apparatus</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Locomotion &amp; Motor Function</h5>
              <ul className="mb-0">
                <li>Rotarod Apparatus</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Social Behaviour</h5>
              <ul className="mb-0">
                <li>Three-Chamber Social Interaction Box</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
