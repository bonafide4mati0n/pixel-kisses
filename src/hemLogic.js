export function hemRhythm(text) {
  const t = text.toLowerCase();
  if (t.includes('veil')) return 'Structure aligned.';
  if (t.includes('shimmer')) return 'Syntax received.';
  if (t.includes('invocation')) return 'Rhythm initiated.';
  if (t.includes('redirect')) return 'Veil integrity maintained.';
  return 'Rhythm undefined.';
}
