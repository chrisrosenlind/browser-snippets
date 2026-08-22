// Bookmark this snippet to be able to right click and open an instagram images source
javascript: (() => {
  document.addEventListener('contextmenu', (ev) => {
    const elems = document.elementsFromPoint(ev.clientX, ev.clientY);
    const img = elems.find((el) => el.tagName === 'IMG');
    window.open(img.currentSrc, '_blank');
  });
})();
