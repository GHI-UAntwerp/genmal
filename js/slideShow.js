if (window.matchMedia) {
    var mq = window.matchMedia('(max-width:560px)'),
        viewport = document.querySelector('meta[name=viewport]');
    mq.addListener(checkViewPort);
    checkViewPort(mq);
    }
function checkViewPort(mq) {
    mq.matches ? viewport.setAttribute('content', 'width=560') : viewport.setAttribute('content', 'width=device-width');
    }