// Enable SVG animations
new Vivus('logo', {
  start: 'autostart',
  duration: 50,
}, () => {
  document.getElementById('logo').setAttribute('class', 'is-finished');
});

// Enable tooltips
tippy('.has-tooltip', {
  position: 'bottom',
  animateFill: false,
});

// Enable smooth scrolling
new SmoothScroll('a[href*="#"]');
