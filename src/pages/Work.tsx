import React from 'react';
import { Button } from '../components/Button';
import myImage from '../image/comic-cove.jpg';

const Work = () => {
  const projects = [
    {
      title: 'Comic Cove',
      description: 'Comic character browser built in Rails.',
      image: myImage,
      link: 'https://github.com/ZoArk/ComicCove',
      tech: ['Rails', 'PostgreSQL', 'Bootstrap'],
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {projects.map((proj) => (
        <div key={proj.title} className="border rounded-lg p-4 shadow">
          <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover rounded" />
          <h2 className="text-xl font-semibold mt-2">{proj.title}</h2>
          <p className="text-gray-600">{proj.description}</p>
          <p className="text-sm mt-2 text-gray-500">{proj.tech.join(', ')}</p>
          <div className="mt-4">
          <Button href={proj.link} label="Learn More" />

          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
