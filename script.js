'use strict';

for (const year of document.querySelectorAll('[data-year]')) {
  year.textContent = String(new Date().getFullYear());
}

const form = document.querySelector('#quote-form');
if (form) {
  const status = document.querySelector('#form-status');
  const button = form.querySelector('button[type="submit"]');
  const originalButton = button.innerHTML;
  let submitting = false;
  const showStatus = (message, state) => {
    status.textContent = message;
    status.dataset.state = state;
    status.focus();
  };

  for (const link of document.querySelectorAll('[data-service]')) {
    link.addEventListener('click', () => {
      form.elements.service.value = link.dataset.service;
    });
  }

  const textFields = ['name', 'business_name', 'message'].map(name => form.elements[name]);
  for (const field of textFields) {
    field.addEventListener('input', () => field.setCustomValidity(''));
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (submitting) return;
    for (const field of textFields) {
      field.value = field.value.trim();
      field.setCustomValidity(field.value ? '' : 'Please enter more than spaces.');
    }
    if (!form.reportValidity()) return;
    if (form.elements.botcheck.checked) {
      showStatus('Your inquiry could not be sent. Please contact us by email.', 'error');
      return;
    }
    const key = form.elements.access_key.value.trim();
    if (!key || key === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      showStatus('The inquiry form is not connected yet. Please use the email link to contact us. Your entries have been kept.', 'error');
      return;
    }

    submitting = true;
    button.disabled = true;
    button.textContent = 'Sending your inquiry…';
    status.textContent = 'Sending your inquiry…';
    status.dataset.state = 'pending';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      payload.replyto = payload.email;
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Submission failed');
      form.reset();
      showStatus('Thank you! Your inquiry has been sent. We’ll follow up by email to discuss your project.', 'success');
    } catch (error) {
      const message = error.name === 'AbortError'
        ? 'The request timed out, so we couldn’t confirm delivery. Your entries have been kept. Please email us to check before trying again.'
        : 'We couldn’t confirm your inquiry was sent. Your entries have been kept. Please try again later or use the email link.';
      showStatus(message, 'error');
    } finally {
      clearTimeout(timeout);
      submitting = false;
      button.disabled = false;
      button.innerHTML = originalButton;
    }
  });
}
