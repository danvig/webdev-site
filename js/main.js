/* Reveal header once the hero scrolls out of view */
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const hero   = document.querySelector('.hero');
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          /* Hero is in view → hide header */
          header.classList.remove('header-visible');
        } else {
          /* Hero left view → show & stick header */
          header.classList.add('header-visible');
        }
      },
      { threshold: 0 }   // trigger as soon as hero leaves/enters viewport
    );
  
    observer.observe(hero);
  });  