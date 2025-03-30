import { Graph } from '../types/graph';

// A comprehensive dataset of real historical data about the history of computation
const sampleData: Graph = {
  nodes: [
    // Ancient Computing
    {
      id: 'abacus',
      name: 'Abacus',
      type: 'Invention',
      year: -2500,
      description: 'One of the earliest known calculating tools, using beads on rods. Used in ancient Mesopotamia, China, and elsewhere for arithmetic operations.',
      source: 'https://en.wikipedia.org/wiki/Abacus'
    },
    {
      id: 'antikythera',
      name: 'Antikythera Mechanism',
      type: 'Invention',
      year: -150,
      description: 'Ancient Greek analog computer used to predict astronomical positions and eclipses, discovered in a shipwreck dated around 150-100 BCE.',
      source: 'https://en.wikipedia.org/wiki/Antikythera_mechanism'
    },
    
    // Early Mechanical Calculators
    {
      id: 'pascaline',
      name: 'Pascaline',
      type: 'Invention',
      year: 1642,
      description: 'Mechanical calculator invented by Blaise Pascal, one of the earliest mechanical calculating devices that could perform addition and subtraction automatically.',
      source: 'https://en.wikipedia.org/wiki/Pascal%27s_calculator'
    },
    {
      id: 'pascal',
      name: 'Blaise Pascal',
      type: 'Person',
      year: 1623,
      description: 'French mathematician, physicist, and inventor who created one of the first mechanical calculators, the Pascaline, to help his father with tax calculations.',
      source: 'https://en.wikipedia.org/wiki/Blaise_Pascal'
    },
    {
      id: 'leibniz',
      name: 'Gottfried Wilhelm Leibniz',
      type: 'Person',
      year: 1646,
      description: 'German polymath who invented the Stepped Reckoner, a mechanical calculator capable of multiplication and division. Also independently developed binary number system.',
      source: 'https://en.wikipedia.org/wiki/Gottfried_Wilhelm_Leibniz'
    },
    {
      id: 'steppedReckoner',
      name: 'Stepped Reckoner',
      type: 'Invention',
      year: 1673,
      description: 'Mechanical calculator designed by Leibniz that could perform all four arithmetic operations. Featured the Leibniz wheel mechanism used in many later calculators.',
      source: 'https://en.wikipedia.org/wiki/Stepped_reckoner'
    },
    
    // Early Programmable Machines
    {
      id: 'jacquard',
      name: 'Joseph Marie Jacquard',
      type: 'Person',
      year: 1752,
      description: 'French weaver and merchant who invented the Jacquard loom, which used punched cards to automate pattern weaving, influencing early computer concepts.',
      source: 'https://en.wikipedia.org/wiki/Joseph_Marie_Jacquard'
    },
    {
      id: 'jacquardLoom',
      name: 'Jacquard Loom',
      type: 'Invention',
      year: 1804,
      description: 'Mechanical loom that used punched cards to control the weaving of complex patterns, demonstrating the principle of programmed mechanical operations.',
      source: 'https://en.wikipedia.org/wiki/Jacquard_loom'
    },
    {
      id: 'babbage',
      name: 'Charles Babbage',
      type: 'Person',
      year: 1791,
      description: 'English mathematician and inventor who conceived the Difference Engine and the Analytical Engine, essentially designing the first general-purpose computers.',
      source: 'https://en.wikipedia.org/wiki/Charles_Babbage'
    },
    {
      id: 'lovelace',
      name: 'Ada Lovelace',
      type: 'Person',
      year: 1815,
      description: 'English mathematician and writer who created what is considered the first algorithm intended for implementation on Babbage\'s Analytical Engine, making her the first computer programmer.',
      source: 'https://en.wikipedia.org/wiki/Ada_Lovelace'
    },
    {
      id: 'analyticalEngine',
      name: 'Analytical Engine',
      type: 'Invention',
      year: 1837,
      description: 'A mechanical general-purpose computer designed by Charles Babbage but never built. Featured memory, a central processing unit, and programmability via punched cards.',
      source: 'https://en.wikipedia.org/wiki/Analytical_Engine'
    },
    {
      id: 'hollerith',
      name: 'Herman Hollerith',
      type: 'Person',
      year: 1860,
      description: 'American inventor who developed an electromechanical tabulating machine for the 1890 US Census, using punched cards. Founded the company that would become IBM.',
      source: 'https://en.wikipedia.org/wiki/Herman_Hollerith'
    },
    {
      id: 'tabulatingMachine',
      name: 'Hollerith Tabulating Machine',
      type: 'Invention',
      year: 1890,
      description: 'Electromechanical machine that used punched cards to process statistical information, dramatically reducing the time required to process the 1890 US Census.',
      source: 'https://en.wikipedia.org/wiki/Tabulating_machine'
    },
    
    // Early Theoretical Foundations
    {
      id: 'boole',
      name: 'George Boole',
      type: 'Person',
      year: 1815,
      description: 'English mathematician who developed Boolean algebra, a system of logic that would later become fundamental to digital computer circuits and programming.',
      source: 'https://en.wikipedia.org/wiki/George_Boole'
    },
    {
      id: 'booleanAlgebra',
      name: 'Boolean Algebra',
      type: 'Invention',
      year: 1854,
      description: 'A branch of algebra where the values of variables are the truth values true and false. Became the foundation of digital circuit design and computer programming.',
      source: 'https://en.wikipedia.org/wiki/Boolean_algebra'
    },
    
    // Early Electromechanical Computers
    {
      id: 'zuse',
      name: 'Konrad Zuse',
      type: 'Person',
      year: 1910,
      description: 'German engineer who built the Z3, the world\'s first working programmable, fully automatic digital computer, using binary and floating-point arithmetic.',
      source: 'https://en.wikipedia.org/wiki/Konrad_Zuse'
    },
    {
      id: 'z3',
      name: 'Z3 Computer',
      type: 'Invention',
      year: 1941,
      description: 'The first fully functional programmable, electromechanical computer, built by Konrad Zuse in Nazi Germany, it used binary arithmetic and floating-point numbers.',
      source: 'https://en.wikipedia.org/wiki/Z3_(computer)'
    },
    {
      id: 'atanasoff',
      name: 'John Vincent Atanasoff',
      type: 'Person',
      year: 1903,
      description: 'American physicist and inventor who, with graduate student Clifford Berry, created the Atanasoff–Berry Computer (ABC), the first automatic electronic digital computer.',
      source: 'https://en.wikipedia.org/wiki/John_Vincent_Atanasoff'
    },
    {
      id: 'abc',
      name: 'Atanasoff-Berry Computer',
      type: 'Invention',
      year: 1942,
      description: 'The first automatic electronic digital computer, designed to solve systems of linear equations, using vacuum tubes for computation and binary arithmetic.',
      source: 'https://en.wikipedia.org/wiki/Atanasoff%E2%80%93Berry_computer'
    },
    
    // World War II Era
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
      description: 'British mathematician and logician who developed the concept of the Turing machine, broke Nazi encryption, and laid foundations for theoretical computer science and AI.',
      source: 'https://en.wikipedia.org/wiki/Alan_Turing'
    },
    {
      id: 'turingMachine',
      name: 'Turing Machine',
      type: 'Invention',
      year: 1936,
      description: 'A mathematical model of computation describing an abstract machine that manipulates symbols on a tape, providing the theoretical foundation for computational theory.',
      source: 'https://en.wikipedia.org/wiki/Turing_machine'
    },
    {
      id: 'enigma',
      name: 'Enigma Machine',
      type: 'Invention',
      year: 1918,
      description: 'Encryption device used by Nazi Germany during WWII. Breaking its code was a major Allied goal that drove advances in computing.',
      source: 'https://en.wikipedia.org/wiki/Enigma_machine'
    },
    {
      id: 'bombe',
      name: 'Bombe',
      type: 'Invention',
      year: 1940,
      description: 'Electromechanical device designed by Alan Turing and Gordon Welchman to break Enigma-encrypted messages during WWII at Bletchley Park.',
      source: 'https://en.wikipedia.org/wiki/Bombe'
    },
    {
      id: 'bletchleyPark',
      name: 'Bletchley Park',
      type: 'Event',
      year: 1939,
      description: 'The British code-breaking center during WWII where Alan Turing and others worked to decrypt German messages, developing early computing machinery.',
      source: 'https://en.wikipedia.org/wiki/Bletchley_Park'
    },
    {
      id: 'colossus',
      name: 'Colossus Computer',
      type: 'Invention',
      year: 1943,
      description: 'The world\'s first programmable, electronic, digital computer, designed by Tommy Flowers to break the Lorenz cipher used by Nazi high command.',
      source: 'https://en.wikipedia.org/wiki/Colossus_computer'
    },
    {
      id: 'flowers',
      name: 'Tommy Flowers',
      type: 'Person',
      year: 1905,
      description: 'British engineer who designed and built the Colossus computers, the world\'s first programmable electronic computers, to help decrypt Nazi messages.',
      source: 'https://en.wikipedia.org/wiki/Tommy_Flowers'
    },
    {
      id: 'eniac',
      name: 'ENIAC',
      type: 'Invention',
      year: 1945,
      description: 'Electronic Numerical Integrator and Computer, the first general-purpose electronic digital computer. Built to calculate artillery firing tables for the US Army.',
      source: 'https://en.wikipedia.org/wiki/ENIAC'
    },
    {
      id: 'mauchly',
      name: 'John Mauchly',
      type: 'Person',
      year: 1907,
      description: 'American physicist who, with J. Presper Eckert, designed and built ENIAC, the first general-purpose electronic digital computer.',
      source: 'https://en.wikipedia.org/wiki/John_Mauchly'
    },
    {
      id: 'eckert',
      name: 'J. Presper Eckert',
      type: 'Person',
      year: 1919,
      description: 'American electrical engineer who, with John Mauchly, designed and built ENIAC and later co-founded the first commercial computer company in the US.',
      source: 'https://en.wikipedia.org/wiki/J._Presper_Eckert'
    },
    
    // Post-WWII and Early Commercial Computers
    {
      id: 'vonneumann',
      name: 'John von Neumann',
      type: 'Person',
      year: 1903,
      description: 'Hungarian-American mathematician who formalized the stored-program computer architecture (von Neumann architecture) that became the foundation of modern computers.',
      source: 'https://en.wikipedia.org/wiki/John_von_Neumann'
    },
    {
      id: 'vonneumannArchitecture',
      name: 'Von Neumann Architecture',
      type: 'Invention',
      year: 1945,
      description: 'Computer design architecture where program instructions and data share the same memory space. Became the dominant computer architecture still used today.',
      source: 'https://en.wikipedia.org/wiki/Von_Neumann_architecture'
    },
    {
      id: 'edvac',
      name: 'EDVAC',
      type: 'Invention',
      year: 1949,
      description: 'Electronic Discrete Variable Automatic Computer, one of the earliest electronic computers using the stored-program von Neumann architecture.',
      source: 'https://en.wikipedia.org/wiki/EDVAC'
    },
    {
      id: 'manchesterBaby',
      name: 'Manchester Baby',
      type: 'Invention',
      year: 1948,
      description: 'The first electronic stored-program computer to run a program. Developed at the University of Manchester as a test bed for the Williams tube memory.',
      source: 'https://en.wikipedia.org/wiki/Manchester_Baby'
    },
    {
      id: 'hopper',
      name: 'Grace Hopper',
      type: 'Person',
      year: 1906,
      description: 'American computer scientist who developed the first compiler, A-0, and popularized the concept of machine-independent programming languages.',
      source: 'https://en.wikipedia.org/wiki/Grace_Hopper'
    },
    {
      id: 'compiler',
      name: 'First Compiler',
      type: 'Invention',
      year: 1952,
      description: 'A program that translates computer code from one language to another. Grace Hopper\'s A-0 System was the first compiler, enabling higher-level programming languages.',
      source: 'https://en.wikipedia.org/wiki/History_of_compiler_construction'
    },
    {
      id: 'univac',
      name: 'UNIVAC I',
      type: 'Invention',
      year: 1951,
      description: 'The first commercially produced electronic digital computer in the United States, developed by Eckert and Mauchly, who had previously created ENIAC.',
      source: 'https://en.wikipedia.org/wiki/UNIVAC_I'
    },
    {
      id: 'ibm',
      name: 'IBM',
      type: 'Event',
      year: 1911,
      description: 'International Business Machines Corporation, formed in 1911, became a dominant force in computing from the 1950s, developing key mainframe computers and technologies.',
      source: 'https://en.wikipedia.org/wiki/IBM'
    },
    {
      id: 'ibm701',
      name: 'IBM 701',
      type: 'Invention',
      year: 1952,
      description: 'IBM\'s first commercial scientific computer, marking the company\'s entry into electronic computing. Used vacuum tubes and magnetic tape storage.',
      source: 'https://en.wikipedia.org/wiki/IBM_701'
    },
    
    // Transistor Era
    {
      id: 'transistor',
      name: 'Transistor',
      type: 'Invention',
      year: 1947,
      description: 'Semiconductor device that replaces vacuum tubes, invented at Bell Labs by John Bardeen, Walter Brattain, and William Shockley. Revolutionized electronics.',
      source: 'https://en.wikipedia.org/wiki/Transistor'
    },
    {
      id: 'shockley',
      name: 'William Shockley',
      type: 'Person',
      year: 1910,
      description: 'American physicist who co-invented the transistor at Bell Labs and later founded Shockley Semiconductor, which spawned many Silicon Valley companies.',
      source: 'https://en.wikipedia.org/wiki/William_Shockley'
    },
    {
      id: 'bardeen',
      name: 'John Bardeen',
      type: 'Person',
      year: 1908,
      description: 'American physicist who co-invented the transistor at Bell Labs, winning two Nobel Prizes in Physics (for the transistor and superconductivity theory).',
      source: 'https://en.wikipedia.org/wiki/John_Bardeen'
    },
    {
      id: 'brattain',
      name: 'Walter Brattain',
      type: 'Person',
      year: 1902,
      description: 'American physicist who co-invented the point-contact transistor at Bell Labs with John Bardeen, under William Shockley\'s direction.',
      source: 'https://en.wikipedia.org/wiki/Walter_Houser_Brattain'
    },
    {
      id: 'bellLabs',
      name: 'Bell Labs',
      type: 'Event',
      year: 1925,
      description: 'Research and development company that generated numerous innovative technologies, including the transistor, laser, UNIX operating system, and C programming language.',
      source: 'https://en.wikipedia.org/wiki/Bell_Labs'
    },
    {
      id: 'fairchild',
      name: 'Fairchild Semiconductor',
      type: 'Event',
      year: 1957,
      description: 'Semiconductor company founded by the "traitorous eight" who left Shockley Semiconductor. Pioneered integrated circuits and became the seedbed for Silicon Valley.',
      source: 'https://en.wikipedia.org/wiki/Fairchild_Semiconductor'
    },
    {
      id: 'noyce',
      name: 'Robert Noyce',
      type: 'Person',
      year: 1927,
      description: 'American engineer who co-founded Fairchild Semiconductor and Intel, and co-invented the integrated circuit. Known as the "Mayor of Silicon Valley."',
      source: 'https://en.wikipedia.org/wiki/Robert_Noyce'
    },
    {
      id: 'integratedCircuit',
      name: 'Integrated Circuit',
      type: 'Invention',
      year: 1958,
      description: 'Electronic circuit with components placed on a single semiconductor material, independently invented by Jack Kilby at Texas Instruments and Robert Noyce at Fairchild.',
      source: 'https://en.wikipedia.org/wiki/Integrated_circuit'
    },
    {
      id: 'kilby',
      name: 'Jack Kilby',
      type: 'Person',
      year: 1923,
      description: 'American electrical engineer who invented the integrated circuit at Texas Instruments, independently of Robert Noyce, winning the Nobel Prize in Physics in 2000.',
      source: 'https://en.wikipedia.org/wiki/Jack_Kilby'
    },
    {
      id: 'moore',
      name: 'Gordon Moore',
      type: 'Person',
      year: 1929,
      description: 'American engineer, co-founder of Fairchild Semiconductor and Intel, who formulated Moore\'s Law predicting the exponential growth of computing power.',
      source: 'https://en.wikipedia.org/wiki/Gordon_Moore'
    },
    {
      id: 'mooresLaw',
      name: 'Moore\'s Law',
      type: 'Invention',
      year: 1965,
      description: 'Observation by Gordon Moore that the number of transistors on integrated circuits doubles approximately every two years, driving the rapid advancement of computing.',
      source: 'https://en.wikipedia.org/wiki/Moore%27s_law'
    },
    // Microprocessor Era
    {
      id: 'intel',
      name: 'Intel',
      type: 'Event',
      year: 1968,
      description: 'Semiconductor company founded by Robert Noyce and Gordon Moore that produced the first commercial microprocessor, revolutionizing computing.',
      source: 'https://en.wikipedia.org/wiki/Intel'
    },
    {
      id: 'microprocessor',
      name: 'Microprocessor',
      type: 'Invention',
      year: 1971,
      description: 'A computer processor on a single integrated circuit chip. Intel\'s 4004, the first commercial microprocessor, led to the personal computer revolution.',
      source: 'https://en.wikipedia.org/wiki/Microprocessor'
    },
    {
      id: 'intel4004',
      name: 'Intel 4004',
      type: 'Invention',
      year: 1971,
      description: 'The first commercially available microprocessor, developed by Intel. A 4-bit CPU on a single chip that operated at 740 kHz.',
      source: 'https://en.wikipedia.org/wiki/Intel_4004'
    },
    {
      id: 'hoff',
      name: 'Marcian Hoff',
      type: 'Person',
      year: 1937,
      description: 'American electrical engineer who invented the first microprocessor, the Intel 4004, with Federico Faggin, Stanley Mazor, and Masatoshi Shima.',
      source: 'https://en.wikipedia.org/wiki/Marcian_Hoff'
    },
    {
      id: 'faggin',
      name: 'Federico Faggin',
      type: 'Person',
      year: 1941,
      description: 'Italian-American physicist who led the design and development of the Intel 4004, the world\'s first commercial microprocessor.',
      source: 'https://en.wikipedia.org/wiki/Federico_Faggin'
    },
    
    // Early Personal Computing
    {
      id: 'altair8800',
      name: 'Altair 8800',
      type: 'Invention',
      year: 1975,
      description: 'One of the first personal computers, sold as a kit. Its popularity sparked the personal computer revolution and led to the founding of Microsoft.',
      source: 'https://en.wikipedia.org/wiki/Altair_8800'
    },
    {
      id: 'apple1',
      name: 'Apple I',
      type: 'Invention',
      year: 1976,
      description: 'The first computer designed and hand-built by Steve Wozniak, which Steve Jobs helped market. Founded Apple Computer, now Apple Inc.',
      source: 'https://en.wikipedia.org/wiki/Apple_I'
    },
    {
      id: 'jobs',
      name: 'Steve Jobs',
      type: 'Person',
      year: 1955,
      description: 'American entrepreneur who co-founded Apple Inc. and transformed personal computing, mobile phones, and music distribution with innovative products.',
      source: 'https://en.wikipedia.org/wiki/Steve_Jobs'
    },
    {
      id: 'wozniak',
      name: 'Steve Wozniak',
      type: 'Person',
      year: 1950,
      description: 'American computer scientist who co-founded Apple Computer Inc. and designed the Apple I and Apple II computers, pioneering personal computing.',
      source: 'https://en.wikipedia.org/wiki/Steve_Wozniak'
    },
    {
      id: 'gates',
      name: 'Bill Gates',
      type: 'Person',
      year: 1955,
      description: 'American entrepreneur who co-founded Microsoft Corporation, developing software for the emerging personal computer industry and becoming the world\'s richest man.',
      source: 'https://en.wikipedia.org/wiki/Bill_Gates'
    },
    {
      id: 'allen',
      name: 'Paul Allen',
      type: 'Person',
      year: 1953,
      description: 'American entrepreneur who co-founded Microsoft with Bill Gates, developing software for the Altair 8800 and creating BASIC for personal computers.',
      source: 'https://en.wikipedia.org/wiki/Paul_Allen'
    },
    {
      id: 'microsoft',
      name: 'Microsoft',
      type: 'Event',
      year: 1975,
      description: 'Software company founded by Bill Gates and Paul Allen that created MS-DOS, Windows, and Office, dominating the personal computer software industry.',
      source: 'https://en.wikipedia.org/wiki/Microsoft'
    },
    {
      id: 'ibmpc',
      name: 'IBM PC',
      type: 'Invention',
      year: 1981,
      description: 'Personal computer introduced by IBM that set the standard for "IBM-compatible" PCs, using Intel\'s 8088 microprocessor and Microsoft\'s MS-DOS operating system.',
      source: 'https://en.wikipedia.org/wiki/IBM_Personal_Computer'
    },
    {
      id: 'msdos',
      name: 'MS-DOS',
      type: 'Invention',
      year: 1981,
      description: 'Microsoft Disk Operating System, the primary operating system for IBM PCs and compatibles during the 1980s, before the development of Windows.',
      source: 'https://en.wikipedia.org/wiki/MS-DOS'
    },
    
    // Operating Systems and Software
    {
      id: 'ritchie',
      name: 'Dennis Ritchie',
      type: 'Person',
      year: 1941,
      description: 'American computer scientist who created the C programming language and co-developed the UNIX operating system at Bell Labs.',
      source: 'https://en.wikipedia.org/wiki/Dennis_Ritchie'
    },
    {
      id: 'thompson',
      name: 'Ken Thompson',
      type: 'Person',
      year: 1943,
      description: 'American computer scientist who co-created the UNIX operating system and the B programming language, influencing modern computing architecture.',
      source: 'https://en.wikipedia.org/wiki/Ken_Thompson'
    },
    {
      id: 'unix',
      name: 'UNIX',
      type: 'Invention',
      year: 1969,
      description: 'Multitasking, multi-user operating system developed at Bell Labs that influenced nearly all modern operating systems, including Linux, macOS, and Android.',
      source: 'https://en.wikipedia.org/wiki/Unix'
    },
    {
      id: 'clanguage',
      name: 'C Programming Language',
      type: 'Invention',
      year: 1972,
      description: 'General-purpose programming language created by Dennis Ritchie at Bell Labs, used to rewrite UNIX and became one of the most influential programming languages.',
      source: 'https://en.wikipedia.org/wiki/C_(programming_language)'
    },
    {
      id: 'torvalds',
      name: 'Linus Torvalds',
      type: 'Person',
      year: 1969,
      description: 'Finnish-American software engineer who created the Linux kernel and initiated the development of the Linux operating system, championing open-source software.',
      source: 'https://en.wikipedia.org/wiki/Linus_Torvalds'
    },
    {
      id: 'linux',
      name: 'Linux',
      type: 'Invention',
      year: 1991,
      description: 'Free and open-source Unix-like operating system kernel created by Linus Torvalds, which forms the basis for many popular operating systems.',
      source: 'https://en.wikipedia.org/wiki/Linux'
    },
    {
      id: 'stallman',
      name: 'Richard Stallman',
      type: 'Person',
      year: 1953,
      description: 'American programmer who founded the Free Software Movement, initiated the GNU Project, and established the Free Software Foundation.',
      source: 'https://en.wikipedia.org/wiki/Richard_Stallman'
    },
    {
      id: 'gnu',
      name: 'GNU Project',
      type: 'Invention',
      year: 1983,
      description: 'Free software, mass collaboration project announced by Richard Stallman to create a Unix-like operating system composed entirely of free software.',
      source: 'https://en.wikipedia.org/wiki/GNU_Project'
    },
    // Graphical User Interfaces and Modern Computing
    {
      id: 'engelbart',
      name: 'Douglas Engelbart',
      type: 'Person',
      year: 1925,
      description: 'American engineer who invented the computer mouse, hypertext, and demonstrated early GUIs. His 1968 "Mother of All Demos" showcased revolutionary computing concepts.',
      source: 'https://en.wikipedia.org/wiki/Douglas_Engelbart'
    },
    {
      id: 'mouse',
      name: 'Computer Mouse',
      type: 'Invention',
      year: 1964,
      description: 'Pointing device invented by Douglas Engelbart that detects two-dimensional motion relative to a surface, revolutionizing how humans interact with computers.',
      source: 'https://en.wikipedia.org/wiki/Computer_mouse'
    },
    {
      id: 'xeroxParc',
      name: 'Xerox PARC',
      type: 'Event',
      year: 1970,
      description: 'Xerox\'s Palo Alto Research Center, where many modern computing technologies were developed, including the graphical user interface, Ethernet, laser printing, and object-oriented programming.',
      source: 'https://en.wikipedia.org/wiki/PARC_(company)'
    },
    {
      id: 'kay',
      name: 'Alan Kay',
      type: 'Person',
      year: 1940,
      description: 'American computer scientist known for his work at Xerox PARC, where he led the development of object-oriented programming, the Smalltalk language, and modern graphical user interfaces.',
      source: 'https://en.wikipedia.org/wiki/Alan_Kay'
    },
    {
      id: 'gui',
      name: 'Graphical User Interface',
      type: 'Invention',
      year: 1973,
      description: 'Computer interface that uses visual indicators like icons and windows, developed at Xerox PARC with the Alto computer and later popularized by Apple and Microsoft.',
      source: 'https://en.wikipedia.org/wiki/Graphical_user_interface'
    },
    {
      id: 'alto',
      name: 'Xerox Alto',
      type: 'Invention',
      year: 1973,
      description: 'The first computer designed from its inception to support an operating system based on a graphical user interface, developed at Xerox PARC.',
      source: 'https://en.wikipedia.org/wiki/Xerox_Alto'
    },
    {
      id: 'macintosh',
      name: 'Apple Macintosh',
      type: 'Invention',
      year: 1984,
      description: 'The first mass-market personal computer to feature a graphical user interface, built-in screen, and mouse, making computers more accessible to the general public.',
      source: 'https://en.wikipedia.org/wiki/Macintosh'
    },
    {
      id: 'windows',
      name: 'Microsoft Windows',
      type: 'Invention',
      year: 1985,
      description: 'Graphical operating system developed by Microsoft, which became the dominant desktop computing platform, featuring a GUI inspired by the Macintosh.',
      source: 'https://en.wikipedia.org/wiki/Microsoft_Windows'
    },
    
    // Networking and Internet
    {
      id: 'berners-lee',
      name: 'Tim Berners-Lee',
      type: 'Person',
      year: 1955,
      description: 'British computer scientist who invented the World Wide Web while at CERN, creating the first web browser, server, and webpage.',
      source: 'https://en.wikipedia.org/wiki/Tim_Berners-Lee'
    },
    {
      id: 'worldWideWeb',
      name: 'World Wide Web',
      type: 'Invention',
      year: 1989,
      description: 'Information system where documents and resources are identified by URLs, interlinked by hypertext links, and accessible via the Internet. Created by Tim Berners-Lee.',
      source: 'https://en.wikipedia.org/wiki/World_Wide_Web'
    },
    {
      id: 'cerf',
      name: 'Vint Cerf',
      type: 'Person',
      year: 1943,
      description: 'American internet pioneer who, with Bob Kahn, co-invented the TCP/IP protocols that form the foundation of the Internet. Known as one of the "Fathers of the Internet."',
      source: 'https://en.wikipedia.org/wiki/Vint_Cerf'
    },
    {
      id: 'kahn',
      name: 'Robert Kahn',
      type: 'Person',
      year: 1938,
      description: 'American electrical engineer who, with Vint Cerf, invented the TCP/IP protocols. He also worked on the ARPANET and founded the Corporation for National Research Initiatives.',
      source: 'https://en.wikipedia.org/wiki/Bob_Kahn'
    },
    {
      id: 'tcpip',
      name: 'TCP/IP',
      type: 'Invention',
      year: 1974,
      description: 'The foundational communication protocols of the Internet, developed by Vint Cerf and Robert Kahn, allowing diverse computer networks to interconnect and communicate.',
      source: 'https://en.wikipedia.org/wiki/Internet_protocol_suite'
    },
    {
      id: 'arpanet',
      name: 'ARPANET',
      type: 'Invention',
      year: 1969,
      description: 'The first operational packet-switching network, the precursor to the Internet, developed by the Advanced Research Projects Agency (ARPA) of the US Department of Defense.',
      source: 'https://en.wikipedia.org/wiki/ARPANET'
    },
    {
      id: 'licklider',
      name: 'J.C.R. Licklider',
      type: 'Person',
      year: 1915,
      description: 'American psychologist and computer scientist who envisioned a global computer network years before it was built and headed the office that created ARPANET.',
      source: 'https://en.wikipedia.org/wiki/J._C._R._Licklider'
    },
    {
      id: 'coldWar',
      name: 'Cold War',
      type: 'Event',
      year: 1947,
      description: 'Geopolitical tension between the United States and the Soviet Union that drove military and technological competition, including computing and networking advancements.',
      source: 'https://en.wikipedia.org/wiki/Cold_War'
    },
    
    // Modern Era
    {
      id: 'page',
      name: 'Larry Page',
      type: 'Person',
      year: 1973,
      description: 'American computer scientist who co-founded Google with Sergey Brin, revolutionizing internet search and becoming one of the world\'s most influential technology companies.',
      source: 'https://en.wikipedia.org/wiki/Larry_Page'
    },
    {
      id: 'brin',
      name: 'Sergey Brin',
      type: 'Person',
      year: 1973,
      description: 'American computer scientist who co-founded Google with Larry Page while both were PhD students at Stanford University.',
      source: 'https://en.wikipedia.org/wiki/Sergey_Brin'
    },
    {
      id: 'google',
      name: 'Google',
      type: 'Event',
      year: 1998,
      description: 'Technology company founded by Larry Page and Sergey Brin, best known for its search engine but expanded to software, hardware, cloud computing, and AI.',
      source: 'https://en.wikipedia.org/wiki/Google'
    },
    {
      id: 'pageRank',
      name: 'PageRank Algorithm',
      type: 'Invention',
      year: 1996,
      description: 'Search algorithm developed by Larry Page and Sergey Brin that ranks web pages based on their link structure, forming the basis of Google\'s search technology.',
      source: 'https://en.wikipedia.org/wiki/PageRank'
    },
    {
      id: 'iphone',
      name: 'iPhone',
      type: 'Invention',
      year: 2007,
      description: 'Smartphone designed by Apple Inc. that revolutionized mobile computing with its multi-touch interface, App Store ecosystem, and integration of internet services.',
      source: 'https://en.wikipedia.org/wiki/IPhone'
    },
    {
      id: 'cloud',
      name: 'Cloud Computing',
      type: 'Invention',
      year: 2006,
      description: 'Delivery of computing services—including servers, storage, databases, networking, and software—over the Internet, pioneered by Amazon Web Services.',
      source: 'https://en.wikipedia.org/wiki/Cloud_computing'
    },
    {
      id: 'bezos',
      name: 'Jeff Bezos',
      type: 'Person',
      year: 1964,
      description: 'American entrepreneur who founded Amazon.com and pioneered e-commerce and cloud computing through Amazon Web Services (AWS).',
      source: 'https://en.wikipedia.org/wiki/Jeff_Bezos'
    }
  ],
  links: [
    // Ancient computing connections
    {
      source: 'abacus',
      target: 'antikythera',
      description: 'preceded by thousands of years'
    },
    
    // Early mechanical calculator connections
    {
      source: 'pascal',
      target: 'pascaline',
      description: 'invented'
    },
    {
      source: 'leibniz',
      target: 'steppedReckoner',
      description: 'invented'
    },
    {
      source: 'pascaline',
      target: 'steppedReckoner',
      description: 'inspired'
    },
    
    // Early programmable machine connections
    {
      source: 'jacquard',
      target: 'jacquardLoom',
      description: 'invented'
    },
    {
      source: 'jacquardLoom',
      target: 'babbage',
      description: 'influenced'
    },
    {
      source: 'babbage',
      target: 'analyticalEngine',
      description: 'designed'
    },
    {
      source: 'babbage',
      target: 'lovelace',
      description: 'collaborated with'
    },
    {
      source: 'lovelace',
      target: 'analyticalEngine',
      description: 'wrote programs for'
    },
    {
      source: 'jacquardLoom',
      target: 'analyticalEngine',
      description: 'influenced design of'
    },
    {
      source: 'analyticalEngine',
      target: 'hollerith',
      description: 'conceptually influenced'
    },
    {
      source: 'hollerith',
      target: 'tabulatingMachine',
      description: 'invented'
    },
    {
      source: 'tabulatingMachine',
      target: 'ibm',
      description: 'led to foundation of'
    },
    
    // Theoretical foundations connections
    {
      source: 'boole',
      target: 'booleanAlgebra',
      description: 'developed'
    },
    {
      source: 'booleanAlgebra',
      target: 'analyticalEngine',
      description: 'later influenced implementation of'
    },
    {
      source: 'booleanAlgebra',
      target: 'z3',
      description: 'formed logical foundation for'
    },
    
    // Early electromechanical computer connections
    {
      source: 'zuse',
      target: 'z3',
      description: 'built'
    },
    {
      source: 'atanasoff',
      target: 'abc',
      description: 'built'
    },
    
    // WWII era connections
    {
      source: 'ww2',
      target: 'z3',
      description: 'created urgency for'
    },
    {
      source: 'ww2',
      target: 'turing',
      description: 'created demand for codebreaking expertise of'
    },
    {
      source: 'turing',
      target: 'turingMachine',
      description: 'conceived'
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
      target: 'flowers',
      description: 'employed'
    },
    {
      source: 'flowers',
      target: 'colossus',
      description: 'built'
    },
    {
      source: 'bletchleyPark',
      target: 'colossus',
      description: 'housed'
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
    
    // Post-WWII computing connections
    {
      source: 'vonneumann',
      target: 'eniac',
      description: 'consulted on'
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
      source: 'vonneumannArchitecture',
      target: 'edvac',
      description: 'implemented in'
    },
    {
      source: 'vonneumannArchitecture',
      target: 'manchesterBaby',
      description: 'implemented in'
    },
    {
      source: 'vonneumannArchitecture',
      target: 'ibm701',
      description: 'implemented in'
    },
    {
      source: 'eniac',
      target: 'univac',
      description: 'led to development of'
    },
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
      source: 'colossus',
      target: 'eniac',
      description: 'preceded and influenced'
    },
    {
      source: 'hopper',
      target: 'univac',
      description: 'worked on'
    },
    {
      source: 'hopper',
      target: 'compiler',
      description: 'created'
    },
    {
      source: 'compiler',
      target: 'clanguage',
      description: 'concept later advanced in'
    },
    // Transistor era connections
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
      source: 'ww2',
      target: 'bellLabs',
      description: 'influenced research priorities at'
    },
    {
      source: 'transistor',
      target: 'fairchild',
      description: 'led to formation of'
    },
    {
      source: 'shockley',
      target: 'fairchild',
      description: 'indirectly led to formation of'
    },
    {
      source: 'fairchild',
      target: 'noyce',
      description: 'co-founded by'
    },
    {
      source: 'fairchild',
      target: 'moore',
      description: 'co-founded by'
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
      source: 'transistor',
      target: 'integratedCircuit',
      description: 'made possible'
    },
    {
      source: 'moore',
      target: 'mooresLaw',
      description: 'formulated'
    },
    {
      source: 'integratedCircuit',
      target: 'mooresLaw',
      description: 'observed pattern of'
    },
    {
      source: 'coldWar',
      target: 'transistor',
      description: 'accelerated development of'
    },
    {
      source: 'coldWar',
      target: 'integratedCircuit',
      description: 'accelerated development of'
    },
    
    // Microprocessor era connections
    {
      source: 'noyce',
      target: 'intel',
      description: 'co-founded'
    },
    {
      source: 'moore',
      target: 'intel',
      description: 'co-founded'
    },
    {
      source: 'fairchild',
      target: 'intel',
      description: 'spawned'
    },
    {
      source: 'intel',
      target: 'microprocessor',
      description: 'developed first commercial'
    },
    {
      source: 'integratedCircuit',
      target: 'microprocessor',
      description: 'evolved into'
    },
    {
      source: 'intel',
      target: 'intel4004',
      description: 'produced'
    },
    {
      source: 'hoff',
      target: 'intel4004',
      description: 'designed'
    },
    {
      source: 'faggin',
      target: 'intel4004',
      description: 'implemented'
    },
    {
      source: 'mooresLaw',
      target: 'microprocessor',
      description: 'predicted rapid advancement of'
    },
    
    // Early personal computing connections
    {
      source: 'microprocessor',
      target: 'altair8800',
      description: 'enabled'
    },
    {
      source: 'integratedCircuit',
      target: 'apple1',
      description: 'made possible'
    },
    {
      source: 'microprocessor',
      target: 'apple1',
      description: 'powered'
    },
    {
      source: 'altair8800',
      target: 'microsoft',
      description: 'catalyzed formation of'
    },
    {
      source: 'gates',
      target: 'microsoft',
      description: 'co-founded'
    },
    {
      source: 'allen',
      target: 'microsoft',
      description: 'co-founded'
    },
    {
      source: 'jobs',
      target: 'apple1',
      description: 'marketed'
    },
    {
      source: 'wozniak',
      target: 'apple1',
      description: 'designed and built'
    },
    {
      source: 'altair8800',
      target: 'apple1',
      description: 'inspired'
    },
    {
      source: 'microsoft',
      target: 'msdos',
      description: 'developed'
    },
    {
      source: 'ibm',
      target: 'ibmpc',
      description: 'developed'
    },
    {
      source: 'ibmpc',
      target: 'msdos',
      description: 'used'
    },
    {
      source: 'microsoft',
      target: 'ibmpc',
      description: 'provided software for'
    },
    {
      source: 'microprocessor',
      target: 'ibmpc',
      description: 'powered'
    },
    // Operating systems and software connections
    {
      source: 'bellLabs',
      target: 'unix',
      description: 'developed'
    },
    {
      source: 'ritchie',
      target: 'unix',
      description: 'co-developed'
    },
    {
      source: 'thompson',
      target: 'unix',
      description: 'co-developed'
    },
    {
      source: 'unix',
      target: 'clanguage',
      description: 'prompted creation of'
    },
    {
      source: 'ritchie',
      target: 'clanguage',
      description: 'created'
    },
    {
      source: 'clanguage',
      target: 'unix',
      description: 'used to reimplement'
    },
    {
      source: 'unix',
      target: 'linux',
      description: 'inspired'
    },
    {
      source: 'torvalds',
      target: 'linux',
      description: 'created'
    },
    {
      source: 'stallman',
      target: 'gnu',
      description: 'founded'
    },
    {
      source: 'unix',
      target: 'gnu',
      description: 'inspired'
    },
    {
      source: 'gnu',
      target: 'linux',
      description: 'combined with to form GNU/Linux'
    },
    
    // GUI and modern computing connections
    {
      source: 'engelbart',
      target: 'mouse',
      description: 'invented'
    },
    {
      source: 'xeroxParc',
      target: 'alto',
      description: 'developed'
    },
    {
      source: 'xeroxParc',
      target: 'gui',
      description: 'pioneered'
    },
    {
      source: 'kay',
      target: 'xeroxParc',
      description: 'worked at'
    },
    {
      source: 'kay',
      target: 'gui',
      description: 'helped develop'
    },
    {
      source: 'engelbart',
      target: 'xeroxParc',
      description: 'influenced work at'
    },
    {
      source: 'mouse',
      target: 'alto',
      description: 'incorporated in'
    },
    {
      source: 'mouse',
      target: 'macintosh',
      description: 'incorporated in'
    },
    {
      source: 'alto',
      target: 'macintosh',
      description: 'inspired'
    },
    {
      source: 'jobs',
      target: 'macintosh',
      description: 'directed development of'
    },
    {
      source: 'wozniak',
      target: 'macintosh',
      description: 'contributed to early development of'
    },
    {
      source: 'macintosh',
      target: 'windows',
      description: 'influenced'
    },
    {
      source: 'gates',
      target: 'windows',
      description: 'led development of'
    },
    {
      source: 'microsoft',
      target: 'windows',
      description: 'developed'
    },
    {
      source: 'alto',
      target: 'windows',
      description: 'concepts influenced'
    },
    {
      source: 'gui',
      target: 'windows',
      description: 'implemented in'
    },
    {
      source: 'gui',
      target: 'macintosh',
      description: 'implemented in'
    },
    
    // Networking and internet connections
    {
      source: 'licklider',
      target: 'arpanet',
      description: 'envisioned concept leading to'
    },
    {
      source: 'coldWar',
      target: 'arpanet',
      description: 'motivated development of'
    },
    {
      source: 'arpanet',
      target: 'tcpip',
      description: 'evolved to use'
    },
    {
      source: 'cerf',
      target: 'tcpip',
      description: 'co-invented'
    },
    {
      source: 'kahn',
      target: 'tcpip',
      description: 'co-invented'
    },
    {
      source: 'tcpip',
      target: 'worldWideWeb',
      description: 'enabled'
    },
    {
      source: 'berners-lee',
      target: 'worldWideWeb',
      description: 'invented'
    },
    
    // Modern era connections
    {
      source: 'page',
      target: 'google',
      description: 'co-founded'
    },
    {
      source: 'brin',
      target: 'google',
      description: 'co-founded'
    },
    {
      source: 'page',
      target: 'pageRank',
      description: 'co-developed'
    },
    {
      source: 'brin',
      target: 'pageRank',
      description: 'co-developed'
    },
    {
      source: 'pageRank',
      target: 'google',
      description: 'formed foundation of'
    },
    {
      source: 'worldWideWeb',
      target: 'google',
      description: 'created need for'
    },
    {
      source: 'jobs',
      target: 'iphone',
      description: 'led development of'
    },
    {
      source: 'microprocessor',
      target: 'iphone',
      description: 'enabled'
    },
    {
      source: 'gui',
      target: 'iphone',
      description: 'evolved into touch interface of'
    },
    {
      source: 'bezos',
      target: 'cloud',
      description: 'pioneered commercialization of'
    },
    {
      source: 'linux',
      target: 'cloud',
      description: 'powers most'
    },
    {
      source: 'arpanet',
      target: 'cloud',
      description: 'conceptually led to'
    }
  ]
};

// Export the nodes and links arrays
export const nodes = sampleData.nodes;
export const links = sampleData.links;

// Keep the default export for backward compatibility
export default sampleData; 