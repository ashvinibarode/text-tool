const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const readingTime = document.getElementById('readingTime');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

textInput.addEventListener('input', updateSummary);

function toUpperCaseText() {
  textInput.value = textInput.value.toUpperCase();
  updateSummary();
}

function toLowerCaseText() {
  textInput.value = textInput.value.toLowerCase();
  updateSummary();
}

function capitalizeText() {
  textInput.value = textInput.value
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  updateSummary();
}

function removeSpaces() {
  textInput.value = textInput.value.replace(/\s+/g, ' ').trim();
  updateSummary();
}

function copyText() {
  textInput.select();
  document.execCommand('copy');
  alert('Text Copied to Clipboard ✅');
}

function clearText() {
  textInput.value = '';
  updateSummary();
}

function updateSummary() {
  const text = textInput.value.trim();
  const words = text === "" ? 0 : text.split(/\s+/).length;
  const chars = text.length;
  const time = (words / 200).toFixed(2);

  wordCount.textContent = `Words: ${words}`;
  charCount.textContent = `Characters: ${chars}`;
  readingTime.textContent = `Reading Time: ${time} min`;
}

// 🌓 Theme Toggle
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeToggle.textContent = 
    body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});
