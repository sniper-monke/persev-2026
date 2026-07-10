// Service Worker for audio playback
self.addEventListener('message', (event) => {
    if (event.data.command === 'playAudio') {
        console.log('Service Worker: Received play command');
        // Service workers can potentially play audio
        fetch('/assets/landing-tune.mp3')
            .then(response => response.blob())
            .then(blob => {
                console.log('Service Worker: Audio blob created');
                // Send back to client
                event.ports[0].postMessage({ status: 'ready', blob: blob });
            })
            .catch(error => {
                console.error('Service Worker: Error loading audio', error);
            });
    }
});
