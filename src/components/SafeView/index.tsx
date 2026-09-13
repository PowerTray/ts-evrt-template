import React from 'react';

interface SafeViewProps {
  children?: React.ReactNode;
}

export default function SafeView({ children }: SafeViewProps) {
  return (
    <div className="overflow-hidden bg-zinc-700 text-white text-3xl w-screen h-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
}
