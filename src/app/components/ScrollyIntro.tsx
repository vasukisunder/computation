import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NODE_COLORS } from '@/app/utils/constants';

interface ScrollyIntroProps {
  onComplete: () => void;
}

const sections = [
  {
    id: 'intro',
    title: "World War II: The Catalyst",
    content: "World War II became the unexpected accelerator of computing innovation. The desperate need for faster calculations, code-breaking capabilities, and battlefield logistics created perfect conditions for technological breakthroughs.",
    highlight: ["World War II", "Bletchley Park", "Colossus", "ENIAC"]
  },
  {
    id: 'enigma',
    title: "Breaking Enigma",
    content: "At Bletchley Park, Alan Turing and his team developed the Bombe machine to crack Nazi Germany's Enigma codes. This work laid the foundation for modern computer science and potentially shortened the war by years.",
    highlight: ["Alan Turing", "Enigma", "Bombe"]
  },
  {
    id: 'colossus',
    title: "The First Electronic Computer",
    content: "The Colossus, built in 1943, was the world's first programmable electronic digital computer. Created to break the more complex Lorenz cipher, it introduced concepts still fundamental to computing today.",
    highlight: ["Colossus", "Tommy Flowers", "Lorenz cipher"]
  },
  {
    id: 'eniac',
    title: "ENIAC: The Next Step",
    content: "The war's demand for ballistic calculations led to ENIAC, the first general-purpose electronic computer. Though completed after the war, it represented a huge leap forward in computing capability.",
    highlight: ["ENIAC", "John von Neumann", "ballistic calculations"]
  },
  {
    id: 'postwar',
    title: "The Post-War Revolution",
    content: "Post-war innovations exploded as military technology found civilian applications. The transistor, invented at Bell Labs in 1947, would transform computing from room-sized machines to desktop devices.",
    highlight: ["Bell Labs", "Transistor", "William Shockley"]
  },
  {
    id: 'commercial',
    title: "The Birth of Commercial Computing",
    content: "Military research flowed into commercial applications. UNIVAC I, derived from ENIAC's technology, became the first commercial computer in 1951, opening the door to business computing.",
    highlight: ["UNIVAC", "IBM", "commercial computing"]
  },
  {
    id: 'silicon',
    title: "Silicon Valley Emerges",
    content: "The military's continued investment in computing research helped create Silicon Valley. Companies like Fairchild Semiconductor, founded by wartime researchers, led to the microchip revolution.",
    highlight: ["Fairchild Semiconductor", "Intel", "Silicon Valley"]
  },
  {
    id: 'legacy',
    title: "The Ongoing Impact",
    content: "The wartime computing revolution continues to shape our world. From artificial intelligence to the internet itself, many of today's technologies can trace their origins to innovations born of wartime necessity.",
    highlight: ["Internet", "ARPANET", "modern computing"]
  }
];

export default function ScrollyIntro({ onComplete }: ScrollyIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const observerOptions = {
      root: null, // use viewport
      rootMargin: '-45% 0px -45% 0px', // trigger when section is in the middle 10% of viewport
      threshold: 0.1
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionIndex = parseInt(entry.target.getAttribute('data-index') || '0');
          setCurrentSection(sectionIndex);

          // Check if we're at the last section and it's more than 50% visible
          if (sectionIndex === sections.length && entry.intersectionRatio > 0.5) {
            onComplete();
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sectionsElements = containerRef.current?.querySelectorAll('section');
    sectionsElements?.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#f8f7f6] text-[#4a4e69] overflow-y-auto">
      {/* Skip button */}
      <button
        onClick={onComplete}
        className="fixed top-4 right-4 px-3 py-1.5 bg-[#9a8c98] text-white rounded-full text-xs 
          hover:bg-[#4a4e69] transition-colors z-50"
      >
        Skip Intro
      </button>

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#9a8c98] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Section indicators */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSection 
                ? 'bg-[#4a4e69] scale-125' 
                : 'bg-[#c9ada7] scale-100'
            }`}
          />
        ))}
      </div>

      <div ref={containerRef} className="relative">
        {sections.map((section, index) => (
          <section
            key={section.id}
            data-index={index}
            className="h-[75vh] flex items-center justify-center px-8 py-4 snap-start snap-always"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-20%" }}
              className="max-w-2xl space-y-6"
            >
              <h2 className="text-3xl font-light tracking-wide text-[#4a4e69]">
                {section.title}
              </h2>
              <p className="text-base leading-relaxed text-[#4a4e69]/80">
                {section.content}
              </p>
              
              {/* Highlighted terms */}
              <div className="flex flex-wrap gap-2 mt-4">
                {section.highlight.map((term) => (
                  <span
                    key={term}
                    className="px-3 py-1 bg-[#c9ada7]/20 text-[#4a4e69] rounded-full text-xs
                      border border-[#c9ada7]/30"
                  >
                    {term}
                  </span>
                ))}
              </div>
            </motion.div>
          </section>
        ))}

        {/* Final call-to-action */}
        <section
          data-index={sections.length}
          className="h-[75vh] flex items-center justify-center px-8 py-4 snap-start snap-always"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-center space-y-6"
          >
            <h2 className="text-3xl font-light tracking-wide text-[#4a4e69]">
              Explore the Connections
            </h2>
            <p className="text-base text-[#4a4e69]/80">
              Discover how these wartime innovations sparked a chain reaction of technological advancement that continues today.
            </p>
            <button
              onClick={onComplete}
              className="mt-6 px-6 py-2 bg-[#4a4e69] text-white rounded-full text-sm 
                hover:bg-[#9a8c98] transition-colors border border-transparent
                hover:border-[#4a4e69]"
            >
              Start Exploring
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
} 