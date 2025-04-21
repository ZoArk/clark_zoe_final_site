import React from 'react';
import { Button } from '../components/Button';
import myImage from '../image/unicorn.jpg';


const Resources = () => {
  const resources = [
    {
      title: 'The Unicorn Project',
      summary: 'A DevOps novel that explores modern software delivery.',
      image: myImage,
      link: 'https://www.amazon.ca/Unicorn-Project-Developers-Disruption-Thriving/dp/1942788762/',
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {resources.map((res) => (
        <div key={res.title} className="border rounded-lg p-4 shadow">
          <img src={res.image} alt={res.title} className="w-full h-40 object-cover rounded" />
          <h2 className="text-xl font-semibold mt-2">{res.title}</h2>
          <p className="text-gray-600">{res.summary}</p>
          <div className="mt-4">
          <Button href={res.link} label="Learn More" />

          </div>
        </div>
      ))}
    </div>
  );
};

export default Resources;
