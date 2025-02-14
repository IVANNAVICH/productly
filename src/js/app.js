
const toggleButton = document.getElementById('darkToggle');

let modeIndex = 0; // Track the current mode (0 = light, 1 = dark, 2 = custom)

const modes = [
  { background: 'white', color: '#2f281e' },  // Light Mode
  { background: '#242424', color: 'white' },  // Dark Mode
  { background: '#083F43', color: 'white' }   // Custom Mode (#083F43)
];

toggleButton.addEventListener('click', function () {
  modeIndex = (modeIndex + 1) % modes.length; // Cycle through 0 → 1 → 2 → 0

  document.body.style.backgroundColor = modes[modeIndex].background;
  document.body.style.color = modes[modeIndex].color;
});

document.getElementById("darkToggle").addEventListener("click", function () {
  let path = this.querySelector("#svgPath"); // Select the path inside SVG
  let currentColor = path.getAttribute("fill");

  // Toggle between colors
  let newColor = currentColor === "#242424" ? "#083f43" : currentColor === "#083f43" ? "white" : "#242424";

  path.setAttribute("fill", newColor);
});