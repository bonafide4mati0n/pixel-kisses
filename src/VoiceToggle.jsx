// src/VoiceToggle.jsx
import React, { useState } from 'react';
import { initAmethystVoice } from './lib/voice';

export default function VoiceToggle() {
  const [primed, setPrimed] = useState(false);

  const handlePrime = () => {
    initAmethystVoice();
    setPrimed(true);
  };

  return (
    <button onClick={handlePrime} className="btn">
      {primed ? 'Voice primed' : 'Prime Amethyst Voice'}
    </button>
  );
}

