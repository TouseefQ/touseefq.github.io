/**
 * Form Handler
 * ============
 * Handles form submission via AJAX to Formspree
 * Shows success/error messages without page redirect
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const statusMessage = document.querySelector('.form-status');
  const submitButton = form.querySelector('button[type="submit"]');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form data
    const formData = new FormData(form);
    const formAction = form.getAttribute('action');

    // Disable submit button and show loading state
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
      // Submit to Formspree via AJAX
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Show success message
        statusMessage.textContent = 'Thanks for reaching out! I\'ll get back to you soon.';
        statusMessage.style.color = 'var(--color-success, #4caf50)';
        statusMessage.style.display = 'block';

        // Reset form
        form.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          statusMessage.style.display = 'none';
        }, 5000);
      } else {
        // Show error message
        const data = await response.json();
        if (data.errors) {
          statusMessage.textContent = data.errors.map(error => error.message).join(', ');
        } else {
          statusMessage.textContent = 'Oops! There was a problem submitting your form. Please try again.';
        }
        statusMessage.style.color = 'var(--color-error, #f44336)';
        statusMessage.style.display = 'block';
      }
    } catch (error) {
      // Show error message
      statusMessage.textContent = 'Oops! There was a problem submitting your form. Please try again.';
      statusMessage.style.color = 'var(--color-error, #f44336)';
      statusMessage.style.display = 'block';
    } finally {
      // Re-enable submit button
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
  });
});
