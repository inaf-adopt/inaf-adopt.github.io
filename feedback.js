(function () {
  'use strict';
  const form = document.getElementById('adopt-feedback-form');
  if (!form) return;
  const button = document.getElementById('feedback-submit');
  const status = document.getElementById('feedback-status');
  const unavailable = document.getElementById('feedback-unavailable');
  const configured = String(window.ADOPT_FEEDBACK_ENDPOINT || '').trim();
  let endpoint;
  try {
    const url = new URL(configured);
    if (url.protocol === 'https:' && url.hostname === 'formspree.io' &&
        /^\/f\/[a-zA-Z0-9_-]+\/?$/.test(url.pathname) &&
        !url.search && !url.hash && !url.username && !url.password) endpoint = url.href;
  } catch (_) { /* No endpoint configured yet. */ }
  // Fail closed. Never submit to the website itself or claim delivery without an endpoint.
  if (!endpoint) {
    // Even if a disabled submit control is bypassed, never send a message to this static page.
    form.addEventListener('submit', (event) => event.preventDefault());
    return;
  }
  form.action = endpoint;
  unavailable.hidden = true;
  button.disabled = false;
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    button.disabled = true;
    status.dataset.state = 'pending';
    status.textContent = 'Sending your feedback…';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      if (!response.ok) throw new Error('Submission was not accepted');
      form.reset();
      status.dataset.state = 'success';
      status.textContent = 'Thank you. Your feedback has been submitted successfully.';
    } catch (error) {
      status.dataset.state = 'error';
      status.textContent = 'We could not send your feedback. Please try again later. Your message is still in the form.';
    } finally {
      button.disabled = false;
    }
  });
})();
