/**
 * Scroll Animation Manager using Intersection Observer
 * Triggers fade-in animations when sections come into view
 */

(function() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Add visible class immediately if motion is reduced (accessibility)
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      el.classList.add('visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element entered viewport
        entry.target.classList.add('visible');
        // Stop observing after first trigger (optional: remove this line for re-trigger)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,      // Trigger when 10% of element is visible
    rootMargin: "50px"   // Start animation 50px before element is fully visible
  });

  // Observe all elements with animate-on-scroll class
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
})();
