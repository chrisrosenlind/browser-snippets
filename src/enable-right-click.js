// Bookmark this snippet to override pages that disabled right-click
javascript: (() => {
  document.addEventListener(
    'contextmenu',
    (e) => {
      e.stopPropagation();
    },
    true,
  );
})();
