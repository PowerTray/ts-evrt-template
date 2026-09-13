import React from 'react';
import AppBar from '../components/AppBar';
import SafeView from '../components/SafeView';

export default function App() {
  return (
    <SafeView>
      <AppBar />
      <p>Some Things Needs Updates!</p>
    </SafeView>
  );
}
