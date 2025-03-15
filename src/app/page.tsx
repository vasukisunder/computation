'use client';

import { sampleData } from './data/sampleData';
import ForceGraph from './components/ForceGraph';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
   

      <main className="flex-1 relative">
        {/* Full-page Visualization Component */}
        <ForceGraph data={sampleData} />
      </main>
    </div>
  );
}
