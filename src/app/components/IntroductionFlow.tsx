import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroductionFlowProps {
  onComplete: () => void;
}

const slides = [
  {
    title: "The Dawn of Computation",
    description: "From ancient counting tools to modern supercomputers, the story of computation is a journey of human ingenuity spanning thousands of years.",
    image: "/images/intro/abacus.jpg",
    fact: "The abacus, invented around 2400 BC, was one of humanity's first computational devices."
  },
  {
    title: "The Mechanical Age",
    description: "The 17th-19th centuries saw the birth of mechanical calculators, with innovators like Blaise Pascal and Charles Babbage leading the way.",
    image: "/images/intro/analytical-engine.jpg",
    fact: "Charles Babbage's Analytical Engine (1837) contained most of the elements of modern computers."
  },
  {
    title: "The Electronic Revolution",
    description: "World War II accelerated computer development, leading to breakthrough machines like ENIAC and the birth of modern computing.",
    image: "/images/intro/eniac.jpg",
    fact: "ENIAC (1945) was the first general-purpose electronic computer, weighing 30 tons and filling a large room."
  },
  {
    title: "The Digital Age",
    description: "The invention of transistors and integrated circuits launched us into the era of personal computers and digital innovation.",
    image: "/images/intro/microprocessor.jpg",
    fact: "The Intel 4004 (1971) was the first commercial microprocessor, containing 2,300 transistors."
  },
  {
    title: "Explore the History",
    description: "You're about to dive into an interactive visualization of computing history. Discover the connections between people, inventions, and events that shaped our digital world.",
    image: "/images/intro/network.jpg",
    fact: "This visualization contains over 100 interconnected elements spanning 4,000 years of computational history."
  }
];

export default function IntroductionFlow({ onComplete }: IntroductionFlowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageError, setImageError] = useState(false);

  const handleNext = () => {
    if (currentSlide === slides.length - 1) {
      onComplete();
    } else {
      setCurrentSlide(currentSlide + 1);
      setImageError(false);
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight' || event.key === 'Enter') {
      handleNext();
    } else if (event.key === 'Escape') {
      handleSkip();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-gray-900 text-white flex items-center justify-center"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto p-8"
        >
          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden bg-gray-800">
            {!imageError && (
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                fill
                style={{ objectFit: 'cover' }}
                onError={() => setImageError(true)}
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          </div>

          <div className="space-y-4">
            <motion.h1 
              className="text-4xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.div 
              className="bg-gray-800 p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-sm text-gray-400">Did you know?</p>
              <p className="text-gray-300">{slides[currentSlide].fact}</p>
            </motion.div>
          </div>

          <motion.div 
            className="mt-8 flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? 'bg-white' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <div className="flex space-x-4">
              <button
                onClick={handleSkip}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Skip
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                {currentSlide === slides.length - 1 ? 'Start Exploring' : 'Next'}
              </button>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 