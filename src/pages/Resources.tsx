import React from 'react';

const Resources: React.FC = () => {
  return (
    <div>
      <h1>Research</h1>
      <p className="lead">
        PRH takes a multidisciplinary approach to research, integrating neuroscience, toxicology, and One Health to tackle pressing challenges facing African communities and ecosystems.
      </p>

      <h2 className="mt-4">Our Research Pillars</h2>

      <div className="mt-3 mb-4 p-4 border rounded">
        <h3>Neuroscience</h3>
        <p>
          Neuroscience explores the development, structure, function, and dysfunction of the nervous system. PRH takes a multidisciplinary approach, using both mammalian and non-mammalian models to tackle pressing questions in brain research.
        </p>
        <h6>Our focus areas include:</h6>
        <ul>
          <li>Affective & Behavioral Neuroscience</li>
          <li>Cellular & Molecular Neuroscience</li>
          <li>Cognitive & Developmental Neuroscience</li>
          <li>Computational & Translational Neuroscience</li>
        </ul>
        <p>
          Through innovative experiments and data-driven research, we aim to advance the understanding of brain function and neurological disorders, with a particular focus on developing solutions for translational neurological challenges using natural products.
        </p>
      </div>

      <div className="mb-4 p-4 border rounded">
        <h3>Toxicology</h3>
        <p>
          Toxicology is the scientific study of how chemical, physical, or biological agents affect living organisms and ecosystems. Exposure to toxins can cause immediate harm or trigger long-term biochemical and molecular changes.
        </p>
        <p>
          At PRH, our researchers focus on mechanistic and translational toxicology, combining molecular, cellular, and systems-level approaches. Our work spans human health and ecological risk assessment, emphasizing evidence-based strategies to reduce exposure, prevent harm, and improve health outcomes across African populations.
        </p>
      </div>

      <div className="mb-4 p-4 border rounded">
        <h3>One Health</h3>
        <p>
          One Health recognizes the interconnectedness of human, animal, and environmental health. Global challenges such as climate change, urbanization, deforestation, and increased mobility intensify disease spread and environmental threats.
        </p>
        <p>
          PRH integrates ecological, evolutionary, and environmental sciences into One Health strategies to develop sustainable solutions that protect health across species and ecosystems, ensuring a safer, healthier environment for communities and wildlife alike.
        </p>
      </div>

      <h2 className="mt-4">Research Resources & Equipment</h2>
      <p>Our laboratory is equipped with a wide range of tools to support cutting-edge research:</p>
      <div className="row">
        <div className="col-md-6">
          <ul className="list-group mb-3">
            <li className="list-group-item">Microcentrifuges</li>
            <li className="list-group-item">Refrigerated centrifuges</li>
            <li className="list-group-item">-20°C Freezers</li>
            <li className="list-group-item">Refrigerators (4°C)</li>
            <li className="list-group-item">Autoclaves and pressure cookers</li>
            <li className="list-group-item">PCR Thermal Cycler</li>
            <li className="list-group-item">Microplate Reader</li>
            <li className="list-group-item">DNA/RNA extraction reagents</li>
            <li className="list-group-item">Micropipettes (adjustable)</li>
            <li className="list-group-item">Multi-channel pipettes</li>
            <li className="list-group-item">Vortex mixers</li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="list-group mb-3">
            <li className="list-group-item">Incubators (CO₂ & standard)</li>
            <li className="list-group-item">High-performance computers for bioinformatics</li>
            <li className="list-group-item">Data storage and cloud computing access</li>
            <li className="list-group-item">Software: BLAST, Geneious, Galaxy, R/Bioconductor</li>
            <li className="list-group-item">Analytical and precision balances</li>
            <li className="list-group-item">Water baths</li>
            <li className="list-group-item">Laboratory glassware</li>
            <li className="list-group-item">3D Printer</li>
            <li className="list-group-item">Stereomicroscope</li>
            <li className="list-group-item">Compound microscopes</li>
            <li className="list-group-item">Microwave (laboratory grade)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;
