(function() {
  $('code').each(function(){
    const code = this;

    code.onclick = function() {
      document.execCommand("copy");
    };

    code.addEventListener("copy", function(event) {
      event.preventDefault();
      if (event.clipboardData) {
        event.clipboardData.setData("text/plain", code.textContent);
        console.log('Copied: ' + event.clipboardData.getData("text"))
      }
    });
  });
})();