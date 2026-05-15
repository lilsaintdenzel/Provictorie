import React from 'react';

const Resources: React.FC = () => {
  return (
    <div>
      <h1>Research</h1>
      <p className="lead">
        PRH conducts multidisciplinary research integrating neuroscience, toxicology, computational science, and One Health to address critical health and environmental challenges in Africa.
      </p>

      <h2 className="mt-4">Our Research Pillars</h2>

      <div className="mt-3 mb-4 p-4 border rounded">
        <h3>Neuroscience</h3>
        <p>
          Neuroscience explores the development, structure, function, and dysfunction of the nervous system. PRH takes a multidisciplinary approach, using both mammalian and non-mammalian models to tackle pressing questions in brain research.
        </p>
        <ul>
          <li>Affective &amp; Behavioral Neuroscience</li>
          <li>Cellular &amp; Molecular Neuroscience</li>
          <li>Cognitive &amp; Developmental Neuroscience</li>
          <li>Translational Neuroscience</li>
        </ul>
      </div>

      <div className="mb-4 p-4 border rounded">
        <h3>Toxicology</h3>
        <p>
          Toxicology is the scientific study of how chemical, physical, or biological agents affect living organisms and ecosystems. Exposure to toxins can cause immediate harm or trigger long-term biochemical and molecular changes.
        </p>
        <ul>
          <li>Mechanistic &amp; Translational Toxicology</li>
          <li>Environmental &amp; Human Health Risk Assessment</li>
        </ul>
      </div>

      <div className="mb-4 p-4 border rounded">
        <h3>Computational Science &amp; Genomics</h3>
        <ul>
          <li>Genomic biomarker discovery</li>
          <li>Machine learning approaches</li>
          <li>Disease modeling using <em>Drosophila melanogaster</em></li>
        </ul>
      </div>

      <div className="mb-4 p-4 border rounded">
        <h3>One Health</h3>
        <p>
          One Health recognizes the interconnectedness of human, animal, and environmental health. Global challenges such as climate change, urbanization, deforestation, and increased mobility intensify disease spread and environmental threats.
        </p>
        <ul>
          <li>Human, animal &amp; environmental health integration</li>
          <li>Sustainable and ecosystem-based solutions</li>
        </ul>
      </div>

      <h2 className="mt-4">Resources &amp; Equipment</h2>
      <p>Our laboratory is equipped with a wide range of tools to support cutting-edge research:</p>
      <div className="row">
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

      <h2 className="mt-4">Ongoing Research</h2>
      <div className="p-4 border rounded mt-3">
        <p className="mb-0">
          Neuroprotective effects of natural products in Parkinson's disease models using <em>Drosophila melanogaster</em>, supported by the International Society for Neurochemistry.
        </p>
      </div>
    </div>
  );
};

export default Resources;
