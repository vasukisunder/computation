import { Graph } from '../types/graph';

// A comprehensive dataset of real historical data about the history of computation
const sampleData: Graph = {
  nodes: [
    // Pre-WWII Theoretical Foundations
    {
      id: 'boole',
      name: 'George Boole',
      type: 'Person',
      year: 1815,
      description: 'English mathematician who developed Boolean algebra, a system of logic that became fundamental to digital computer circuits and programming.',
      source: 'https://en.wikipedia.org/wiki/George_Boole'
    },
    {
      id: 'booleanAlgebra',
      name: 'Boolean Algebra',
      type: 'Invention',
      year: 1854,
      description: 'A branch of algebra where values are truth values true and false, becoming the foundation of digital circuit design and computer programming.',
      source: 'https://en.wikipedia.org/wiki/Boolean_algebra'
    },
    {
      id: 'babbage',
      name: 'Charles Babbage',
      type: 'Person',
      year: 1791,
      description: 'English mathematician who conceived the Analytical Engine, essentially designing the first general-purpose computer.',
      source: 'https://en.wikipedia.org/wiki/Charles_Babbage'
    },
    {
      id: 'analyticalEngine',
      name: 'Analytical Engine',
      type: 'Invention',
      year: 1837,
      description: 'A mechanical general-purpose computer design featuring memory, CPU, and programmability via punched cards.',
      source: 'https://en.wikipedia.org/wiki/Analytical_Engine'
    },
    {
      id: 'lovelace',
      name: 'Ada Lovelace',
      type: 'Person',
      year: 1815,
      description: 'English mathematician who created the first algorithm for Babbage\'s Analytical Engine, making her the first computer programmer.',
      source: 'https://en.wikipedia.org/wiki/Ada_Lovelace'
    },
    {
      id: 'hollerith',
      name: 'Herman Hollerith',
      type: 'Person',
      year: 1860,
      description: 'American inventor who developed punch card tabulating machines for the 1890 US Census, founding the company that became IBM.',
      source: 'https://en.wikipedia.org/wiki/Herman_Hollerith'
    },
    {
      id: 'tabulatingMachine',
      name: 'Tabulating Machine',
      type: 'Invention',
      year: 1890,
      description: 'Electromechanical machine using punched cards to process statistical information, dramatically reducing census processing time.',
      source: 'https://en.wikipedia.org/wiki/Tabulating_machine'
    },
    {
      id: 'ibm',
      name: 'IBM',
      type: 'Event',
      year: 1911,
      description: 'International Business Machines Corporation, evolved from Hollerith\'s company to become a dominant force in computing.',
      source: 'https://en.wikipedia.org/wiki/IBM'
    },
    {
      id: 'zuse',
      name: 'Konrad Zuse',
      type: 'Person',
      year: 1910,
      description: 'German engineer who built the Z1, Z2, and Z3 computers, pioneering the use of binary and floating-point arithmetic.',
      source: 'https://en.wikipedia.org/wiki/Konrad_Zuse'
    },
    {
      id: 'z1',
      name: 'Z1 Computer',
      type: 'Invention',
      year: 1938,
      description: 'First programmable computer designed by Konrad Zuse, using mechanical binary arithmetic.',
      source: 'https://en.wikipedia.org/wiki/Z1_(computer)'
    },
    {
      id: 'z2',
      name: 'Z2 Computer',
      type: 'Invention',
      year: 1939,
      description: 'Improved version of the Z1, using electrical relay circuits for arithmetic.',
      source: 'https://en.wikipedia.org/wiki/Z2_(computer)'
    },
    {
      id: 'z3',
      name: 'Z3 Computer',
      type: 'Invention',
      year: 1941,
      description: 'First fully functional programmable, electromechanical computer, using binary arithmetic and floating-point numbers.',
      source: 'https://en.wikipedia.org/wiki/Z3_(computer)'
    },

    // Core WWII Era Figures and Innovations
    {
      id: 'ww2',
      name: 'World War II',
      type: 'Event',
      year: 1939,
      description: 'Global conflict that accelerated computing development through military needs for ballistic calculations, code-breaking, and scientific research.',
      source: 'https://en.wikipedia.org/wiki/World_War_II'
    },
    {
      id: 'turing',
      name: 'Alan Turing',
      type: 'Person',
      year: 1912,
      description: 'British mathematician who developed the Turing machine concept, broke Nazi encryption, and laid foundations for computer science.',
      source: 'https://en.wikipedia.org/wiki/Alan_Turing'
    },
    {
      id: 'turingMachine',
      name: 'Turing Machine',
      type: 'Invention',
      year: 1936,
      description: 'Mathematical model of computation that manipulates symbols on a tape, providing the theoretical foundation for computer science.',
      source: 'https://en.wikipedia.org/wiki/Turing_machine'
    },
    {
      id: 'church',
      name: 'Alonzo Church',
      type: 'Person',
      year: 1903,
      description: 'American mathematician who developed lambda calculus and collaborated with Turing on computability theory.',
      source: 'https://en.wikipedia.org/wiki/Alonzo_Church'
    },
    {
      id: 'lambdaCalculus',
      name: 'Lambda Calculus',
      type: 'Invention',
      year: 1936,
      description: 'Mathematical framework for expressing computation based on function abstraction, influencing functional programming.',
      source: 'https://en.wikipedia.org/wiki/Lambda_calculus'
    },
    {
      id: 'churchTuringThesis',
      name: 'Church-Turing Thesis',
      type: 'Invention',
      year: 1936,
      description: 'Hypothesis about the nature of computable functions, stating that Turing machines can compute everything that is computable.',
      source: 'https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis'
    },
    {
      id: 'enigma',
      name: 'Enigma Machine',
      type: 'Invention',
      year: 1918,
      description: 'Encryption device used by Nazi Germany during WWII, breaking its code drove advances in computing.',
      source: 'https://en.wikipedia.org/wiki/Enigma_machine'
    },
    {
      id: 'bombe',
      name: 'Bombe',
      type: 'Invention',
      year: 1940,
      description: 'Electromechanical device designed by Turing and Welchman to break Enigma-encrypted messages.',
      source: 'https://en.wikipedia.org/wiki/Bombe'
    },
    {
      id: 'welchman',
      name: 'Gordon Welchman',
      type: 'Person',
      year: 1906,
      description: 'British mathematician who improved the Bombe design and developed traffic analysis techniques.',
      source: 'https://en.wikipedia.org/wiki/Gordon_Welchman'
    },
    {
      id: 'bletchleyPark',
      name: 'Bletchley Park',
      type: 'Event',
      year: 1939,
      description: 'British code-breaking center where early computing machinery was developed to decrypt Nazi messages.',
      source: 'https://en.wikipedia.org/wiki/Bletchley_Park'
    },
    {
      id: 'colossus',
      name: 'Colossus Computer',
      type: 'Invention',
      year: 1943,
      description: 'First programmable electronic digital computer, designed to break the Lorenz cipher.',
      source: 'https://en.wikipedia.org/wiki/Colossus_computer'
    },
    {
      id: 'flowers',
      name: 'Tommy Flowers',
      type: 'Person',
      year: 1905,
      description: 'British engineer who designed and built the Colossus computers at Bletchley Park.',
      source: 'https://en.wikipedia.org/wiki/Tommy_Flowers'
    },
    {
      id: 'lorenz',
      name: 'Lorenz Cipher',
      type: 'Invention',
      year: 1941,
      description: 'Advanced German cipher machine used for high-level communications, more complex than Enigma.',
      source: 'https://en.wikipedia.org/wiki/Lorenz_cipher'
    },
    {
      id: 'tunny',
      name: 'Tunny Machine',
      type: 'Invention',
      year: 1942,
      description: 'British device developed at Bletchley Park to help break the Lorenz cipher before Colossus.',
      source: 'https://en.wikipedia.org/wiki/Tunny_(cryptography)'
    },
    {
      id: 'newman',
      name: 'Max Newman',
      type: 'Person',
      year: 1897,
      description: 'British mathematician who led the development of Colossus and influenced early computer science.',
      source: 'https://en.wikipedia.org/wiki/Max_Newman'
    },
    {
      id: 'eniac',
      name: 'ENIAC',
      type: 'Invention',
      year: 1945,
      description: 'First general-purpose electronic computer, built to calculate artillery firing tables for the US Army.',
      source: 'https://en.wikipedia.org/wiki/ENIAC'
    },
    {
      id: 'mauchly',
      name: 'John Mauchly',
      type: 'Person',
      year: 1907,
      description: 'American physicist who co-designed ENIAC and helped establish the computer industry.',
      source: 'https://en.wikipedia.org/wiki/John_Mauchly'
    },
    {
      id: 'eckert',
      name: 'J. Presper Eckert',
      type: 'Person',
      year: 1919,
      description: 'American engineer who co-designed ENIAC and co-founded the first computer company.',
      source: 'https://en.wikipedia.org/wiki/J._Presper_Eckert'
    },
    {
      id: 'vonneumann',
      name: 'John von Neumann',
      type: 'Person',
      year: 1903,
      description: 'Hungarian-American mathematician who formalized stored-program computer architecture.',
      source: 'https://en.wikipedia.org/wiki/John_von_Neumann'
    },
    {
      id: 'vonneumannArchitecture',
      name: 'Von Neumann Architecture',
      type: 'Invention',
      year: 1945,
      description: 'Computer architecture where program instructions and data share memory space.',
      source: 'https://en.wikipedia.org/wiki/Von_Neumann_architecture'
    },
    {
      id: 'goldstine',
      name: 'Herman Goldstine',
      type: 'Person',
      year: 1913,
      description: 'American mathematician who managed the ENIAC project and worked with von Neumann.',
      source: 'https://en.wikipedia.org/wiki/Herman_Goldstine'
    },
    {
      id: 'atanasoff',
      name: 'John Vincent Atanasoff',
      type: 'Person',
      year: 1903,
      description: 'American physicist who created the Atanasoff-Berry Computer, the first electronic digital computer.',
      source: 'https://en.wikipedia.org/wiki/John_Vincent_Atanasoff'
    },
    {
      id: 'berry',
      name: 'Clifford Berry',
      type: 'Person',
      year: 1918,
      description: 'American engineer who helped Atanasoff build the ABC, pioneering electronic computing.',
      source: 'https://en.wikipedia.org/wiki/Clifford_Berry'
    },
    {
      id: 'abc',
      name: 'Atanasoff-Berry Computer',
      type: 'Invention',
      year: 1942,
      description: 'First electronic digital computer, designed for solving systems of linear equations.',
      source: 'https://en.wikipedia.org/wiki/Atanasoff%E2%80%93Berry_computer'
    },

    // Post-WWII Early Commercial Computing
    {
      id: 'univac',
      name: 'UNIVAC I',
      type: 'Invention',
      year: 1951,
      description: 'First commercial computer in the US, developed by Eckert and Mauchly\'s company.',
      source: 'https://en.wikipedia.org/wiki/UNIVAC_I'
    },
    {
      id: 'edvac',
      name: 'EDVAC',
      type: 'Invention',
      year: 1949,
      description: 'One of the earliest electronic computers using the stored-program von Neumann architecture.',
      source: 'https://en.wikipedia.org/wiki/EDVAC'
    },
    {
      id: 'edsac',
      name: 'EDSAC',
      type: 'Invention',
      year: 1949,
      description: 'Early British computer that influenced the development of LEO, the first business computer.',
      source: 'https://en.wikipedia.org/wiki/EDSAC'
    },
    {
      id: 'wilkes',
      name: 'Maurice Wilkes',
      type: 'Person',
      year: 1913,
      description: 'British computer scientist who designed EDSAC and developed microprogramming concept.',
      source: 'https://en.wikipedia.org/wiki/Maurice_Wilkes'
    },
    {
      id: 'leo',
      name: 'LEO I',
      type: 'Invention',
      year: 1951,
      description: 'First computer used for commercial business applications, built by J. Lyons & Co.',
      source: 'https://en.wikipedia.org/wiki/LEO_(computer)'
    },
    {
      id: 'manchester',
      name: 'Manchester Baby',
      type: 'Invention',
      year: 1948,
      description: 'First computer to run a stored program, developed at the University of Manchester.',
      source: 'https://en.wikipedia.org/wiki/Manchester_Baby'
    },
    {
      id: 'kilburn',
      name: 'Tom Kilburn',
      type: 'Person',
      year: 1921,
      description: 'British computer scientist who led the development of the Manchester computers.',
      source: 'https://en.wikipedia.org/wiki/Tom_Kilburn'
    },
    {
      id: 'williams',
      name: 'Freddie Williams',
      type: 'Person',
      year: 1911,
      description: 'British engineer who developed the Williams tube memory used in early computers.',
      source: 'https://en.wikipedia.org/wiki/Frederic_C._Williams'
    },
    {
      id: 'williamsKilburnTube',
      name: 'Williams-Kilburn Tube',
      type: 'Invention',
      year: 1947,
      description: 'First random-access digital storage device, using a cathode ray tube for memory.',
      source: 'https://en.wikipedia.org/wiki/Williams_tube'
    },

    // Transistor Era and Semiconductor Industry
    {
      id: 'transistor',
      name: 'Transistor',
      type: 'Invention',
      year: 1947,
      description: 'Semiconductor device that revolutionized electronics, replacing vacuum tubes.',
      source: 'https://en.wikipedia.org/wiki/Transistor'
    },
    {
      id: 'shockley',
      name: 'William Shockley',
      type: 'Person',
      year: 1910,
      description: 'Co-inventor of the transistor who founded influential Shockley Semiconductor Laboratory.',
      source: 'https://en.wikipedia.org/wiki/William_Shockley'
    },
    {
      id: 'bardeen',
      name: 'John Bardeen',
      type: 'Person',
      year: 1908,
      description: 'Co-inventor of the transistor at Bell Labs, won two Nobel Prizes in Physics.',
      source: 'https://en.wikipedia.org/wiki/John_Bardeen'
    },
    {
      id: 'brattain',
      name: 'Walter Brattain',
      type: 'Person',
      year: 1902,
      description: 'Co-inventor of the transistor at Bell Labs, developed the point-contact transistor.',
      source: 'https://en.wikipedia.org/wiki/Walter_Brattain'
    },
    {
      id: 'bellLabs',
      name: 'Bell Labs',
      type: 'Event',
      year: 1925,
      description: 'Research facility where the transistor, UNIX, C language, and many other innovations were developed.',
      source: 'https://en.wikipedia.org/wiki/Bell_Labs'
    },
    {
      id: 'fairchild',
      name: 'Fairchild Semiconductor',
      type: 'Event',
      year: 1957,
      description: 'Pioneering semiconductor company that spawned many Silicon Valley startups.',
      source: 'https://en.wikipedia.org/wiki/Fairchild_Semiconductor'
    },
    {
      id: 'noyce',
      name: 'Robert Noyce',
      type: 'Person',
      year: 1927,
      description: 'Co-founder of Fairchild and Intel, co-invented the integrated circuit.',
      source: 'https://en.wikipedia.org/wiki/Robert_Noyce'
    },
    {
      id: 'moore',
      name: 'Gordon Moore',
      type: 'Person',
      year: 1929,
      description: 'Co-founder of Fairchild and Intel, formulated Moore\'s Law.',
      source: 'https://en.wikipedia.org/wiki/Gordon_Moore'
    },
    {
      id: 'mooresLaw',
      name: 'Moore\'s Law',
      type: 'Invention',
      year: 1965,
      description: 'Observation that the number of transistors on integrated circuits doubles about every two years.',
      source: 'https://en.wikipedia.org/wiki/Moore%27s_law'
    },
    {
      id: 'integratedCircuit',
      name: 'Integrated Circuit',
      type: 'Invention',
      year: 1958,
      description: 'Miniaturized electronic circuit that revolutionized electronic devices.',
      source: 'https://en.wikipedia.org/wiki/Integrated_circuit'
    },
    {
      id: 'kilby',
      name: 'Jack Kilby',
      type: 'Person',
      year: 1923,
      description: 'Inventor of the integrated circuit at Texas Instruments, won Nobel Prize in Physics.',
      source: 'https://en.wikipedia.org/wiki/Jack_Kilby'
    },

    // Early Operating Systems and Programming Languages
    {
      id: 'unix',
      name: 'UNIX',
      type: 'Invention',
      year: 1969,
      description: 'Influential operating system that emphasized modularity and reusable tools.',
      source: 'https://en.wikipedia.org/wiki/Unix'
    },
    {
      id: 'thompson',
      name: 'Ken Thompson',
      type: 'Person',
      year: 1943,
      description: 'Created UNIX and B programming language at Bell Labs.',
      source: 'https://en.wikipedia.org/wiki/Ken_Thompson'
    },
    {
      id: 'ritchie',
      name: 'Dennis Ritchie',
      type: 'Person',
      year: 1941,
      description: 'Created C programming language and co-developed UNIX.',
      source: 'https://en.wikipedia.org/wiki/Dennis_Ritchie'
    },
    {
      id: 'clanguage',
      name: 'C Programming Language',
      type: 'Invention',
      year: 1972,
      description: 'Influential programming language that combined high-level features with hardware access.',
      source: 'https://en.wikipedia.org/wiki/C_(programming_language)'
    },
    {
      id: 'multics',
      name: 'Multics',
      type: 'Invention',
      year: 1965,
      description: 'Influential time-sharing operating system that inspired UNIX.',
      source: 'https://en.wikipedia.org/wiki/Multics'
    },
    {
      id: 'fortran',
      name: 'FORTRAN',
      type: 'Invention',
      year: 1957,
      description: 'First widely used high-level programming language, focused on scientific computing.',
      source: 'https://en.wikipedia.org/wiki/Fortran'
    },
    {
      id: 'backus',
      name: 'John Backus',
      type: 'Person',
      year: 1924,
      description: 'Led the development of FORTRAN and created Backus-Naur Form.',
      source: 'https://en.wikipedia.org/wiki/John_Backus'
    },
    {
      id: 'cobol',
      name: 'COBOL',
      type: 'Invention',
      year: 1959,
      description: 'Business-oriented programming language that dominated commercial computing.',
      source: 'https://en.wikipedia.org/wiki/COBOL'
    },
    {
      id: 'hopper',
      name: 'Grace Hopper',
      type: 'Person',
      year: 1906,
      description: 'Created the first compiler and influenced development of COBOL.',
      source: 'https://en.wikipedia.org/wiki/Grace_Hopper'
    },
    {
      id: 'compiler',
      name: 'First Compiler',
      type: 'Invention',
      year: 1952,
      description: 'Program that translates human-readable code into machine code, created by Grace Hopper.',
      source: 'https://en.wikipedia.org/wiki/Compiler'
    },

    // Early AI and Computer Science Theory
    {
      id: 'shannon',
      name: 'Claude Shannon',
      type: 'Person',
      year: 1916,
      description: 'Founded information theory and demonstrated the application of Boolean algebra to circuits.',
      source: 'https://en.wikipedia.org/wiki/Claude_Shannon'
    },
    {
      id: 'informationTheory',
      name: 'Information Theory',
      type: 'Invention',
      year: 1948,
      description: 'Mathematical theory quantifying information and enabling modern digital communication.',
      source: 'https://en.wikipedia.org/wiki/Information_theory'
    },
    {
      id: 'wiener',
      name: 'Norbert Wiener',
      type: 'Person',
      year: 1894,
      description: 'Founded cybernetics, studying control and communication in machines and living things.',
      source: 'https://en.wikipedia.org/wiki/Norbert_Wiener'
    },
    {
      id: 'cybernetics',
      name: 'Cybernetics',
      type: 'Invention',
      year: 1948,
      description: 'Study of control and communication in machines and living organisms.',
      source: 'https://en.wikipedia.org/wiki/Cybernetics'
    },
    {
      id: 'mcculloch',
      name: 'Warren McCulloch',
      type: 'Person',
      year: 1898,
      description: 'Created first mathematical model of neural networks with Walter Pitts.',
      source: 'https://en.wikipedia.org/wiki/Warren_McCulloch'
    },
    {
      id: 'pitts',
      name: 'Walter Pitts',
      type: 'Person',
      year: 1923,
      description: 'Co-created first mathematical model of neural networks with Warren McCulloch.',
      source: 'https://en.wikipedia.org/wiki/Walter_Pitts'
    },
    {
      id: 'artificialNeuron',
      name: 'McCulloch-Pitts Neuron',
      type: 'Invention',
      year: 1943,
      description: 'First mathematical model of a neural network, foundation for AI and neural computing.',
      source: 'https://en.wikipedia.org/wiki/Artificial_neuron'
    }
  ],
  links: [
    // Pre-WWII Connections
    {
      source: 'boole',
      target: 'booleanAlgebra',
      description: 'developed'
    },
    {
      source: 'booleanAlgebra',
      target: 'analyticalEngine',
      description: 'influenced design of'
    },
    {
      source: 'babbage',
      target: 'analyticalEngine',
      description: 'designed'
    },
    {
      source: 'lovelace',
      target: 'analyticalEngine',
      description: 'wrote programs for'
    },
    {
      source: 'babbage',
      target: 'lovelace',
      description: 'collaborated with'
    },
    {
      source: 'hollerith',
      target: 'tabulatingMachine',
      description: 'invented'
    },
    {
      source: 'tabulatingMachine',
      target: 'ibm',
      description: 'led to formation of'
    },
    {
      source: 'analyticalEngine',
      target: 'hollerith',
      description: 'influenced'
    },
    {
      source: 'zuse',
      target: 'z1',
      description: 'built'
    },
    {
      source: 'zuse',
      target: 'z2',
      description: 'built'
    },
    {
      source: 'zuse',
      target: 'z3',
      description: 'built'
    },
    {
      source: 'z1',
      target: 'z2',
      description: 'evolved into'
    },
    {
      source: 'z2',
      target: 'z3',
      description: 'evolved into'
    },
    {
      source: 'booleanAlgebra',
      target: 'z1',
      description: 'provided logical foundation for'
    },

    // Theoretical Foundations Connections
    {
      source: 'turing',
      target: 'turingMachine',
      description: 'conceived'
    },
    {
      source: 'church',
      target: 'lambdaCalculus',
      description: 'developed'
    },
    {
      source: 'turing',
      target: 'church',
      description: 'collaborated with'
    },
    {
      source: 'turingMachine',
      target: 'churchTuringThesis',
      description: 'formed basis of'
    },
    {
      source: 'lambdaCalculus',
      target: 'churchTuringThesis',
      description: 'formed basis of'
    },
    {
      source: 'church',
      target: 'churchTuringThesis',
      description: 'formulated'
    },
    {
      source: 'turing',
      target: 'churchTuringThesis',
      description: 'formulated'
    },

    // WWII Connections
    {
      source: 'ww2',
      target: 'turing',
      description: 'created demand for expertise of'
    },
    {
      source: 'enigma',
      target: 'ww2',
      description: 'used during'
    },
    {
      source: 'turing',
      target: 'bombe',
      description: 'designed'
    },
    {
      source: 'welchman',
      target: 'bombe',
      description: 'improved'
    },
    {
      source: 'bombe',
      target: 'enigma',
      description: 'decrypted'
    },
    {
      source: 'bletchleyPark',
      target: 'turing',
      description: 'employed'
    },
    {
      source: 'bletchleyPark',
      target: 'welchman',
      description: 'employed'
    },
    {
      source: 'bletchleyPark',
      target: 'flowers',
      description: 'employed'
    },
    {
      source: 'bletchleyPark',
      target: 'newman',
      description: 'employed'
    },
    {
      source: 'newman',
      target: 'colossus',
      description: 'led development of'
    },
    {
      source: 'flowers',
      target: 'colossus',
      description: 'built'
    },
    {
      source: 'lorenz',
      target: 'tunny',
      description: 'was attacked by'
    },
    {
      source: 'tunny',
      target: 'colossus',
      description: 'preceded'
    },
    {
      source: 'colossus',
      target: 'lorenz',
      description: 'decrypted'
    },
    {
      source: 'ww2',
      target: 'bletchleyPark',
      description: 'necessitated'
    },
    {
      source: 'ww2',
      target: 'eniac',
      description: 'accelerated development of'
    },
    {
      source: 'mauchly',
      target: 'eniac',
      description: 'co-created'
    },
    {
      source: 'eckert',
      target: 'eniac',
      description: 'co-created'
    },
    {
      source: 'goldstine',
      target: 'eniac',
      description: 'managed development of'
    },
    {
      source: 'vonneumann',
      target: 'eniac',
      description: 'consulted on'
    },
    {
      source: 'goldstine',
      target: 'vonneumann',
      description: 'introduced ENIAC to'
    },
    {
      source: 'eniac',
      target: 'vonneumannArchitecture',
      description: 'influenced development of'
    },
    {
      source: 'vonneumann',
      target: 'vonneumannArchitecture',
      description: 'formalized'
    },
    {
      source: 'colossus',
      target: 'eniac',
      description: 'preceded and influenced'
    },
    {
      source: 'atanasoff',
      target: 'abc',
      description: 'conceived'
    },
    {
      source: 'berry',
      target: 'abc',
      description: 'built'
    },
    {
      source: 'abc',
      target: 'eniac',
      description: 'influenced design of'
    },
    {
      source: 'mauchly',
      target: 'atanasoff',
      description: 'visited and learned from'
    },

    // Cross-Era Influences
    {
      source: 'analyticalEngine',
      target: 'turingMachine',
      description: 'influenced development of'
    },
    {
      source: 'booleanAlgebra',
      target: 'turingMachine',
      description: 'provided logical foundation for'
    },
    {
      source: 'tabulatingMachine',
      target: 'bombe',
      description: 'influenced mechanical design of'
    },
    {
      source: 'z3',
      target: 'colossus',
      description: 'paralleled development of'
    },
    {
      source: 'turingMachine',
      target: 'colossus',
      description: 'concepts influenced'
    },
    {
      source: 'turingMachine',
      target: 'vonneumannArchitecture',
      description: 'influenced'
    },
    {
      source: 'z3',
      target: 'vonneumannArchitecture',
      description: 'influenced'
    },

    // Post-WWII Computing Links
    {
      source: 'eckert',
      target: 'univac',
      description: 'co-created'
    },
    {
      source: 'mauchly',
      target: 'univac',
      description: 'co-created'
    },
    {
      source: 'eniac',
      target: 'univac',
      description: 'influenced design of'
    },
    {
      source: 'vonneumannArchitecture',
      target: 'edvac',
      description: 'implemented in'
    },
    {
      source: 'vonneumannArchitecture',
      target: 'edsac',
      description: 'implemented in'
    },
    {
      source: 'wilkes',
      target: 'edsac',
      description: 'designed'
    },
    {
      source: 'edsac',
      target: 'leo',
      description: 'inspired'
    },
    {
      source: 'williams',
      target: 'williamsKilburnTube',
      description: 'co-invented'
    },
    {
      source: 'kilburn',
      target: 'williamsKilburnTube',
      description: 'co-invented'
    },
    {
      source: 'williamsKilburnTube',
      target: 'manchester',
      description: 'enabled'
    },
    {
      source: 'kilburn',
      target: 'manchester',
      description: 'developed'
    },
    {
      source: 'williams',
      target: 'manchester',
      description: 'developed'
    },

    // Transistor Era Links
    {
      source: 'bellLabs',
      target: 'transistor',
      description: 'developed'
    },
    {
      source: 'shockley',
      target: 'transistor',
      description: 'co-invented'
    },
    {
      source: 'bardeen',
      target: 'transistor',
      description: 'co-invented'
    },
    {
      source: 'brattain',
      target: 'transistor',
      description: 'co-invented'
    },
    {
      source: 'transistor',
      target: 'fairchild',
      description: 'enabled formation of'
    },
    {
      source: 'shockley',
      target: 'fairchild',
      description: 'indirectly led to'
    },
    {
      source: 'fairchild',
      target: 'noyce',
      description: 'employed'
    },
    {
      source: 'fairchild',
      target: 'moore',
      description: 'employed'
    },
    {
      source: 'noyce',
      target: 'integratedCircuit',
      description: 'co-invented'
    },
    {
      source: 'kilby',
      target: 'integratedCircuit',
      description: 'co-invented'
    },
    {
      source: 'moore',
      target: 'mooresLaw',
      description: 'formulated'
    },
    {
      source: 'integratedCircuit',
      target: 'mooresLaw',
      description: 'growth predicted by'
    },

    // Operating Systems and Programming Links
    {
      source: 'bellLabs',
      target: 'unix',
      description: 'developed'
    },
    {
      source: 'thompson',
      target: 'unix',
      description: 'created'
    },
    {
      source: 'ritchie',
      target: 'unix',
      description: 'co-developed'
    },
    {
      source: 'multics',
      target: 'unix',
      description: 'inspired'
    },
    {
      source: 'ritchie',
      target: 'clanguage',
      description: 'created'
    },
    {
      source: 'clanguage',
      target: 'unix',
      description: 'used to rewrite'
    },
    {
      source: 'backus',
      target: 'fortran',
      description: 'developed'
    },
    {
      source: 'hopper',
      target: 'compiler',
      description: 'created'
    },
    {
      source: 'compiler',
      target: 'fortran',
      description: 'enabled'
    },
    {
      source: 'hopper',
      target: 'cobol',
      description: 'influenced development of'
    },

    // Early AI and Theory Links
    {
      source: 'shannon',
      target: 'informationTheory',
      description: 'created'
    },
    {
      source: 'booleanAlgebra',
      target: 'shannon',
      description: 'applied to circuits by'
    },
    {
      source: 'wiener',
      target: 'cybernetics',
      description: 'founded'
    },
    {
      source: 'mcculloch',
      target: 'artificialNeuron',
      description: 'co-created'
    },
    {
      source: 'pitts',
      target: 'artificialNeuron',
      description: 'co-created'
    },
    {
      source: 'booleanAlgebra',
      target: 'artificialNeuron',
      description: 'provided foundation for'
    },
    {
      source: 'artificialNeuron',
      target: 'cybernetics',
      description: 'contributed to'
    },
    {
      source: 'turingMachine',
      target: 'artificialNeuron',
      description: 'influenced development of'
    },
    {
      source: 'informationTheory',
      target: 'cybernetics',
      description: 'influenced'
    }
  ]
};

// Export the nodes and links arrays
export const nodes = sampleData.nodes;
export const links = sampleData.links;

// Keep the default export for backward compatibility
export default sampleData; 