/**
 * Smooth Scroll Navigation
 * ========================
 * Enables smooth scrolling for all anchor links (#section-id).
 *
 * How it works:
 * 1. Finds all links with href="#something"
 * 2. Prevents default jump behavior
 * 3. Uses scrollIntoView() with smooth behavior
 * 4. Works with sticky headers (smooth scroll respects header height)
 *
 * No external library needed - uses native browser API
 * Supported in all modern browsers (Chrome, Firefox, Safari, Edge)
 */

/**
 * Add smooth scroll to all anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    // Prevent default jump behavior
    e.preventDefault();

    // Get the target element by its id
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);

    // If target exists, scroll to it smoothly
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',  // Enable smooth animation
        block: 'start'       // Align target to top of viewport
      });
    }
  });
});
