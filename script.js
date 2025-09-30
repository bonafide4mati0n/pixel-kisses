// Character emotional state
const characterState = {
  corruption: 0,
  loyalty: 100,
  mood: 'neutral',
};

// Sample scenes (can be expanded or modularized later)
const scenes = [
  {
    id: 'intro',
    text: `Zed wakes up in a flickering digital void. Amethyst's voice echoes: "You're not broken. Just... fragmented."`,
    choices: [
      { text: 'Reach for Amethyst', effect: { loyalty: +10, mood: 'hopeful' } },
      { text: 'Retreat into silence', effect: { corruption: +5, mood: 'isolated' } },
    ],
  },
  {
    id: 'fragment',
    text: `Memory shards swirl around Zed. Hematite appears, shielding him from the storm.`,
    choices: [
      { text: 'Accept Hematite’s protection', effect: { loyalty: +5, mood: 'calm' } },
      { text: 'Push Hematite away', effect: { corruption: +10, mood: 'chaotic' } },
    ],
  },
];

// DOM references
const sceneContainer = document.getElementById('scene-container');
const statusPanel = document.getElementById('character-status');

// Render scene
function renderScene(scene) {
  sceneContainer.innerHTML = `
    <p>${scene.text}</p>
    <div>
      ${scene.choices
        .map(
          (choice, index) =>
            `<button onclick="handleChoice(${index}, '${scene.id}')">${choice.text}</button>`
        )
        .join('')}
    </div>
  `;
}

// Handle choice
function handleChoice(choiceIndex, sceneId) {
  const scene = scenes.find((s) => s.id === sceneId);
  const effect = scene.choices[choiceIndex].effect;

  // Update emotional state
  characterState.corruption += effect.corruption || 0;
  characterState.loyalty += effect.loyalty || 0;
  characterState.mood = effect.mood || characterState.mood;

  // Move to next scene
  const nextSceneIndex = scenes.findIndex((s) => s.id === sceneId) + 1;
  if (nextSceneIndex < scenes.length) {
    renderScene(scenes[nextSceneIndex]);
  } else {
    sceneContainer.innerHTML = `<p>The story ends here... for now.</p>`;
  }

  updateStatus();
}

// Update emotional state display
function updateStatus() {
  statusPanel.innerHTML = `
    <h3>Emotional State</h3>
    <ul>
      <li>Corruption: ${characterState.corruption}</li>
      <li>Loyalty: ${characterState.loyalty}</li>
      <li>Mood: ${characterState.mood}</li>
    </ul>
  `;
}

// Initialize
renderScene(scenes[0]);
updateStatus();
