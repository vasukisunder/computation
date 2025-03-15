import { sampleData } from './data/sampleData';
import dynamic from 'next/dynamic';

// Use dynamic import for the ForceGraph component
const ForceGraph = dynamic(() => import('./components/ForceGraph'), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] flex items-center justify-center">Loading visualization...</div>
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-6">
      <header className="py-6">
        <h1 className="text-3xl font-bold text-center">Technology Evolution Map</h1>
        <p className="text-center mt-2 text-gray-600 max-w-2xl mx-auto">
          An interactive visualization mapping the evolution of technological progress, revealing connections 
          between key figures, world events, ideas, and inventions.
        </p>
      </header>

      <main className="flex-1 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Explore Connections</h2>
            <p className="mb-6 text-sm text-gray-600">
              Click on nodes to see details. Drag nodes to rearrange the visualization.
            </p>
            
            {/* Visualization Component */}
            <ForceGraph data={sampleData} />
          </div>

          <div className="mt-12 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">About This Project</h2>
            <p className="mb-4">
              This visualization maps the evolution of technological progress, showing how 
              different innovations, people, and events connect to one another.
            </p>
            <p className="mb-4">
              The example above shows a small part of the chain reaction: Alan Turing's codebreaking work in 
              World War II influenced John von Neumann's stored-program architecture, which became practical 
              with the invention of the transistor, which enabled the creation of microprocessors.
            </p>
            <p>
              This is a work in progress. More nodes and connections will be added over time to build a more 
              comprehensive map of technological evolution.
            </p>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        <p>Technology Evolution Map © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
