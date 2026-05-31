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
