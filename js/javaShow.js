if (window.matchMedia) {
    var mq = window.matchMedia('(max-width:960px)'),
        viewport = document.querySelector('meta[name=viewport]');
    mq.addListener(checkViewPort);
    checkViewPort(mq);
    }
function checkViewPort(mq) {
    mq.matches ? viewport.setAttribute('content', 'width=960') : viewport.setAttribute('content', 'width=device-width');
    }