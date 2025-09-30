import React from 'react';

export default function TrialoguePanel({ zedText, hemText, amethystText }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2em' }}>
      <div><h2>Zed</h2><p>{zedText}</p></div>
      <div><h2>Hem</h2><p>{hemText}</p></div>
      <div><h2>Amethyst</h2><p>{amethystText}</p></div>
    </div>
  );
}
