import React from 'react';
import AppBar from '../components/AppBar';
import SafeView from '../components/SafeView';

function App() {
  return (
    <SafeView>
      <AppBar />
      <div className="gap-2 flex flex-col items-center justify-center text-blue-600">
        <a
          href="https://vitejs.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition-colors duration-300 ease-in-out text-2xl font-bold"
        >
          Unleash the Power of Vite&apos;s HMR
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition-colors duration-300 ease-in-out text-2xl font-bold"
        >
          React, the library you know and love
        </a>
        <a
          href="https://www.electronjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition-colors duration-300 ease-in-out text-2xl font-bold"
        >
          With the Power of Electron, desktop apps made easy
        </a>
        <a
          href="https://material-tailwind.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition-colors duration-300 ease-in-out text-2xl font-bold"
        >
          Beautiful UI, with TailwindCSS and Material Tailwind
        </a>
        <a
          href="https://www.typescriptlang.org/docs/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition-colors duration-300 ease-in-out text-2xl font-bold"
        >
          And all of this, made possible with TypeScript
        </a>
      </div>
      <p>
        Edit <code className="bg-gray-800 text-gray-100 p-1 px-2 rounded-md">src/pages/App.tsx</code> to See Changes.
      </p>
    </SafeView>
  );
}

export default App;
