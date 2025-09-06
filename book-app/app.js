const steps = Array.from(document.querySelectorAll('.step'));
const progressBar = document.getElementById('progress-bar');
let currentStep = 0;

function showStep(index) {
  steps[currentStep].classList.add('hidden');
  steps[index].classList.remove('hidden');
  currentStep = index;
  const percent = ((index) / (steps.length - 1)) * 100;
  progressBar.style.width = percent + '%';
}

document.getElementById('startBtn').addEventListener('click', () => showStep(1));

document.querySelectorAll('.template').forEach(btn => {
  btn.addEventListener('click', () => showStep(2));
});

document.getElementById('toCustomization').addEventListener('click', () => showStep(3));

document.getElementById('toShare').addEventListener('click', () => showStep(4));

document.getElementById('createAnother').addEventListener('click', () => {
  document.getElementById('storyText').value = '';
  localStorage.removeItem('storyText');
  showStep(0);
});

const storyText = document.getElementById('storyText');
storyText.addEventListener('input', e => {
  localStorage.setItem('storyText', e.target.value);
});

window.addEventListener('load', () => {
  const saved = localStorage.getItem('storyText');
  if (saved) {
    storyText.value = saved;
  }
});

// Color selection changes page background to illustrate customization
 document.querySelectorAll('.color').forEach(btn => {
   btn.addEventListener('click', () => {
     document.body.style.background = btn.dataset.color;
   });
 });
