/**
 * Monitors the area in view of the video.aktualne.cz iframes and posts messages
 * to the iframes so Caroda can toggle the ads playback.
 */
 ;(() => {
    if (window.carodaEmbeddedInstreamViewability) {
      return
    }
    window.carodaEmbeddedInstreamViewability = true
  
    onVideoAktualneIframe(postChangesInViewability)
  
    function onVideoAktualneIframe(callback) {
      setInterval(() => {
        getVideoAktualneIframes()
          .filter(not(isDetected))
          .forEach((iframe) => {
            markAsDetected(iframe)
            callback(iframe)
          })
      }, 500)
    }
  
    function getVideoAktualneIframes() {
      return Array.from(
        document.querySelectorAll(
          'iframe[src*="https://video.aktualne.cz"],iframe[src*="https://l4unx.aktualne.cz"]'
        )
      )
    }
  
    function isDetected(iframe) {
      return iframe.classList.contains('caroda-detected')
    }
  
    function markAsDetected(iframe) {
      iframe.classList.add('caroda-detected')
    }
  
    function postChangesInViewability(iframe) {
      let inViewPercentage
      const postViewability = () =>
        iframe.contentWindow.postMessage(
          `caroda-in-view-percentage://${inViewPercentage}`,
          '*'
        )
  
      new IntersectionObserver(
        (entries) => {
          inViewPercentage = entries[0].intersectionRatio
          postViewability()
        },
        {
          threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        }
      ).observe(iframe)
      setInterval(postViewability, 250)
    }
  
    function not(fn) {
      return function () {
        return !fn.apply(fn, arguments)
      }
    }
  })()