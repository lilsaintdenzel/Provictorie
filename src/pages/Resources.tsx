import React from 'react';

const Resources: React.FC = () => {
  return (
    <div>
      <h1>Resources</h1>
      <p>A curated list of tools, publications, and datasets for neuroscience research.</p>
      
      <h2>Publications</h2>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>

      <h2 className="mt-4">Tools</h2>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>

      <h2 className="mt-4">Datasets</h2>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
      </ul>
    </div>
  );
};

export default Resources;
