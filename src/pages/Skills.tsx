import React from 'react';

const Skills = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="mt-4">
        <h3 className="font-semibold">Languages & Frameworks:</h3>
        <ul className="list-disc ml-6">
          <li>JavaScript, TypeScript</li>
          <li>React</li>
          <li>Ruby on Rails</li>
          <li>Flask, Python</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold">Tools:</h3>
        <ul className="list-disc ml-6">
          <li>Docker</li>
          <li>Git & GitHub</li>
          <li>VSCode</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
