import { Graph } from '../types/graph';

// This is a starter dataset that you can expand manually
// It follows the chain reaction example you mentioned: 
// Turing -> Von Neumann -> Transistor -> Microprocessor -> Personal Computers -> GUI -> Jobs/Gates -> Internet

export const sampleData: Graph = {
  nodes: [
    {
      id: 'turing',
      name: 'Alan Turing',
      type: 'Person',
      year: 1940,
      description: 'Developed early programmable computers for codebreaking during World War II'
    },
    {
      id: 'ww2',
      name: 'World War II',
      type: 'Event',
      year: 1939,
      description: 'Global war that accelerated technological development'
    },
    {
      id: 'vonneumann',
      name: 'John von Neumann',
      type: 'Person',
      year: 1945,
      description: 'Developed the stored-program architecture that forms the basis of modern computing'
    },
    {
      id: 'transistor',
      name: 'Transistor',
      type: 'Invention',
      year: 1947,
      description: 'Semiconductor device that replaced bulky vacuum tubes, making computers smaller and more reliable'
    },
    {
      id: 'microprocessor',
      name: 'Microprocessor',
      type: 'Invention',
      year: 1971,
      description: 'Integrated circuit containing the entire CPU, enabling personal computing'
    }
  ],
  links: [
    {
      source: 'ww2',
      target: 'turing',
      description: 'created demand for'
    },
    {
      source: 'turing',
      target: 'vonneumann',
      description: 'influenced'
    },
    {
      source: 'vonneumann',
      target: 'transistor',
      description: 'made practical by'
    },
    {
      source: 'transistor',
      target: 'microprocessor',
      description: 'enabled'
    }
  ]
}; 