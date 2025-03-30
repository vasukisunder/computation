'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import ScrollyIntro from './components/ScrollyIntro';
import sampleData from './data/sampleData';

// Dynamically import ForceGraph component
const ForceGraph = dynamic(() => import('./components/ForceGraph'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="animate-pulse text-gray-600">Loading visualization...</div>
    </div>
  ),
});

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  // Add error handling
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen relative">
      {showIntro ? (
        <ScrollyIntro onComplete={handleIntroComplete} />
      ) : (
        <div className="w-full h-screen">
          <ForceGraph 
            data={sampleData} 
            onError={(err: Error) => setError(err.message)}
          />
        </div>
      )}
    </main>
  );
}
