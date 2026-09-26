(function() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', 'G-7KPLTQGLSL');

  document.addEventListener('click', function(event) {
    var downloadLink = event.target.closest('a[data-download-placement]');
    if (downloadLink) {
      window.gtag('event', 'download_click', {
        page_path: window.location.pathname,
        download_placement: downloadLink.getAttribute('data-download-placement')
      });
      return;
    }

    var waitlistLink = event.target.closest('a[data-waitlist-placement]');
    if (waitlistLink) {
      window.gtag('event', 'waitlist_click', {
        page_path: window.location.pathname,
        waitlist_placement: waitlistLink.getAttribute('data-waitlist-placement')
      });
    }
  });
}());
