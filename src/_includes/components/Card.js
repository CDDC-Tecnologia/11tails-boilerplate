const { html } = require('common-tags');

function Card(title, link, linkText) {
  return html`
  <div class="card">
    <h2>${title}</h2>
    <a href="${link}">${linkText}</a>
  </div>
  `;
}