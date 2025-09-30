import React, { useState } from 'react';

export default function InvocationBar({ onInvoke }) {
  const [text, setText] = useState('');
  const [role, setRole] = useState('zed');

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onInvoke(text, role);
    setText('');
  };

  return (
    <form onSubmit={submit} className="invocation-bar">
      <select value={role} onChange={(e) => setRole(e.target.value)} aria-label="Speaker">
        <option value="zed">Zed</option>
        <option value="hem">Hem</option>
        <option value="amethyst">Amethyst</option>
      </select>
      <input
        type="text"
        placeholder="Invoke..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Speak</button>
    </form>
  );
}
