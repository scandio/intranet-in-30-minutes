(function() {
  const $sections = $('section');
  const total = $sections.length;

  let current = window.location.hash ? parseInt(window.location.hash.substring(1)) : 0;

  $sections.each(function(index) {
    const $section = $(this);
    $section.attr('id', index);
  });

  $('body').keydown(function(e) {
    if (e.which === 37) {
      e.preventDefault();
      if (current > 0) {
        current--;
        window.location.hash = '' + current;
      }
    } else if (e.which === 39) {
      e.preventDefault();
      if (current < total - 1) {
        current++;
        window.location.hash = '' + current;
      }
    }
  });

})();