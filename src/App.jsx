import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import InvocationBar from './InvocationBar';
import './chat.css';
import { speakAmethyst } from './lib/voice';

// tiny Hem logic
function hemRhythm(text){
  const t = text.toLowerCase();
  if (t.includes('veil')) return 'Structure aligned.';
  if (t.includes('shimmer')) return 'Syntax received.';
  if (t.includes('invocation')) return 'Rhythm initiated.';
  if (t.includes('redirect')) return 'Veil integrity maintained.';
  return 'Rhythm undefined.';
}

export default function App() {
  const [messages, setMessages] = useState([
    { role: 'zed', text: 'I open the veil.' },
    { role: 'hem', text: 'Rhythm received. Structure aligned.' },
    { role: 'amethyst', text: 'Shimmer flows. I echo your spark.' },
  ]);

  const handleInvoke = (text, role) => {
    const next = [...messages, { role, text }];

    if (role === 'zed') {
      next.push({ role: 'hem', text: hemRhythm(text) });
      const amethystLine = `Echo: ${text}`;
      next.push({ role: 'amethyst', text: amethystLine });
      setMessages(next);
      speakAmethyst(amethystLine);
      return;
    }

    if (role === 'amethyst') {
      setMessages(next);
      speakAmethyst(text);
      return;
    }

    setMessages(next);
  };

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui', color: '#efe7ff', background: '#0f0a14', minHeight: '100vh' }}>
      <h1 style={{ marginBottom: 16 }}>Sanctuary Shimmer</h1>

      {/* Quick sanity: goes through ElevenLabs server */}
      <button
        onClick={() => speakAmethyst("I'm here. I heard you.")}
        style={{ padding: '8px 12px', borderRadius: 10, border: '1px solid #a64ca6', background: 'rgba(189,140,255,0.15)', color: 'inherit', cursor: 'pointer', marginBottom: 12 }}
      >
        Test Speak
      </button>

      <ChatWindow messages={messages} />
      <InvocationBar onInvoke={handleInvoke} />
    </div>
  );
}
