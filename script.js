document.addEventListener('DOMContentLoaded', (event) => {
    // Solicita ao usuário para entrar em tela cheia ao carregar a página
    const docElm = document.documentElement;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) { // Firefox
        docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullscreen) { // Chrome, Safari e Opera
        docElm.webkitRequestFullscreen();
    } else if (docElm.msRequestFullscreen) { // IE/Edge
        docElm.msRequestFullscreen();
    }

    // Reproduz o vídeo automaticamente em tela cheia
    const video = document.getElementById('sustoVideo');
    video.oncanplaythrough = () => {
        video.play();
    };

    // Sai do modo tela cheia e para o vídeo quando terminar
    video.onended = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { // Safari
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        video.pause();
    };
});
