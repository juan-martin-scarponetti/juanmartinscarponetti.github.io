const link = document.querySelector('a');
link.addEventListener('click', function(e) {
  e.preventDefault();
  const url = link.getAttribute('href');
  const filename = url.substring(url.lastIndexOf('/')+1);
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
});

