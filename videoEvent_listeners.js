function addVideoListeners(el, listeners) {
    listeners.forEach( (listener) => {
        el.addEventListener(listener, (e)=> {
            console.log('%c == video event ==> ',  'background: #222; color: yellow', listener);
        })
    })
}

addVideoListeners(videoElement, ['loadstart', 'progress', 'error', 'stalled', 'loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough', 'playing', 'waiting' ]);