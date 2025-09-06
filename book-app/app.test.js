const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');

const htmlPath = path.join(__dirname, 'index.html');
const jsPath = path.join(__dirname, 'app.js');

const html = fs.readFileSync(htmlPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

test('index.html contains five steps', () => {
  const steps = html.match(/<section class="step/g) || [];
  assert.strictEqual(steps.length, 5);
});

test('index.html defines four color buttons', () => {
  const colors = html.match(/class="color"/g) || [];
  assert.strictEqual(colors.length, 4);
});

test('app.js stores story text in localStorage', () => {
  assert.match(js, /localStorage\.setItem/);
});
