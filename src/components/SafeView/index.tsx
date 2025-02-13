import React from 'react';

interface SafeViewProps {
  children?: React.ReactNode;
}

export default function SafeView({ children }: SafeViewProps) {
  return <div className="bg-gray-100 w-screen h-screen flex flex-col items-center justify-center">{children}</div>;
}
