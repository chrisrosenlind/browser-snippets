// Bookmark this snippet to open instagram src on right click
javascript: (() => {
  document.addEventListener('contextmenu', (ev) => {
    const elems = document.elementsFromPoint(ev.clientX, ev.clientY);
    const img = elems.find((el) => el.tagName === 'IMG');
    window.open(img.currentSrc, '_blank');
  });
})();
