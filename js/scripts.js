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
  distance: 20,
  animateFill: false,
});
